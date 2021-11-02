/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '../Icon/Icon';
import { Link } from '../Link/Link';
import { menuItemColorHover, textColorPrimary } from '../../@generated/themes';

interface MenuItem {
    label: string;
    disabled?: boolean;
    icon?: React.ComponentProps<typeof Icon>['type'];
}

interface MenuItemTypeLink extends MenuItem {
    href: string;
}

interface MenuItemTypeRadioCheck extends MenuItem {
    value: any;
}

interface MenuProps {
    type: 'link' | 'radio' | 'check';
    items: Array<MenuItemTypeLink | MenuItemTypeRadioCheck>;
    value?: any[];
    onChange?: (value: any[]) => void;
}

const StyledMenu = styled.div``;
const StyledMenuItem = styled.div<{ checked?: boolean; disabled?: boolean; hovered?: boolean }>`
    cursor: pointer;

    color: ${textColorPrimary};

    ${({ hovered }) =>
        hovered &&
        css`
            background-color: ${menuItemColorHover};
        `}
`;

export const Menu: React.FC<MenuProps> = ({ items, value = [], onChange, type }) => {
    const itemsMap: Record<any, number> = {};
    const itemsMapInverted: Record<number, any> = {};
    const [values, setValues] = useState<Record<number, any>>({});
    const [hovered, setHovered] = useState<number | null>(null);
    let posCounter = 0;
    const currentMenuItemRef = useRef(null);

    const onMouseEnterProvider = (pos: number) => () => setHovered(pos);
    const onMouseLeaveProvider = () => () => setHovered(null);

    const onMenuItemClickProvider = ({ pos, value }: { pos: number; value: any }) => () => {
        let newValues: Record<number, any> = {};
        if (type === 'radio') {
            newValues = { [pos]: itemsMapInverted[pos] };
        }

        if (type === 'check') {
            if (values[pos]) {
                newValues = { ...values };
                delete newValues[pos];
            } else {
                newValues = { ...values, [pos]: itemsMapInverted[pos] };
            }
        }

        setValues(newValues);

        onChange && onChange(Object.values(newValues));
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!e.shiftKey) {
                if (e.code === 'ArrowDown') {
                    let next = (hovered || 0) + 1;

                    if (hovered === null || next > posCounter - 1) {
                        setHovered(0);
                    } else {
                        setHovered(next);
                    }
                }

                if (e.code === 'ArrowUp') {
                    if (hovered === null || hovered === 0) {
                        setHovered(posCounter - 1);
                    } else {
                        setHovered(hovered - 1);
                    }
                }

                if (e.code === 'Space') {
                }
            }
        },
        [hovered, setHovered, posCounter],
    );

    useEffect(() => {
        value && setValues(
            value.reduce((acc, curr) => {
                acc[itemsMap[curr]] = curr;
                return acc;
            }, {}),
        );
    }, []);

    useLayoutEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    if (type === 'link') {
        return (
            <StyledMenu>
                {(items as MenuItemTypeLink[]).map((item) => {
                    const pos = posCounter++;
                    const isHovered = pos === hovered;
                    const ref = isHovered ? currentMenuItemRef : undefined;

                    return (
                        <StyledMenuItem
                            key={item.label}
                            ref={ref}
                            hovered={isHovered}
                            disabled={item.disabled}
                            onMouseEnter={onMouseEnterProvider(pos)}
                            onMouseLeave={onMouseLeaveProvider}
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </StyledMenuItem>
                    );
                })}
            </StyledMenu>
        );
    }

    return (
        <StyledMenu>
            {(items as MenuItemTypeRadioCheck[]).map((item) => {
                const pos = posCounter++;
                itemsMap[item.value] = pos;
                itemsMapInverted[pos] = item.value;

                const isHovered = pos === hovered;
                const isChecked = Boolean(values[pos]);
                const ref = isHovered ? currentMenuItemRef : undefined;

                return (
                    <StyledMenuItem
                        key={item.label}
                        ref={ref}
                        hovered={isHovered}
                        checked={isChecked}
                        disabled={item.disabled}
                        onMouseEnter={onMouseEnterProvider(pos)}
                        onMouseLeave={onMouseLeaveProvider}
                        onClick={onMenuItemClickProvider({ pos, value: item.value })}
                    >
                        {item.label}
                    </StyledMenuItem>
                );
            })}
        </StyledMenu>
    );
};

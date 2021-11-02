/* eslint-disable react/display-name */
import React from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '../Icon/Icon';
import {
    buttonTextColor,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonPrimaryTextColor,
    buttonPrimaryBackgroundColor,
} from '../../@generated/themes';

interface ButtonProps {
    view?: 'default' | 'primary';
    size?: 's' | 'm' | 'l';
    iconLeft?: React.ComponentProps<typeof Icon>['type'];
    iconRight?: React.ComponentProps<typeof Icon>['type'];
    onClick?: React.MouseEventHandler;
}

const StyledButton = styled.button<{
    size: ButtonProps['size'];
    iconLeft: ButtonProps['iconLeft'];
    iconRight: ButtonProps['iconRight'];
}>`
    appearance: none;

    display: flex;
    align-items: center;

    cursor: pointer;

    border-radius: 6px;

    ${({ size }) =>
        size === 's' &&
        css`
            font-size: 12px;
            font-weight: 500;

            padding: 4px 8px;
        `}

    ${({ size, iconRight }) =>
        size === 's' &&
        iconRight &&
        css`
            padding-right: 4px;

            ${StyledButtonText} {
                padding-right: 4px;
            }
        `}

    ${({ size, iconLeft }) =>
        size === 's' &&
        iconLeft &&
        css`
            padding-left: 4px;

            ${StyledButtonText} {
                padding-left: 4px;
            }
        `}

    ${({ size }) =>
        size === 'm' &&
        css`
            font-size: 14px;
            font-weight: 500;

            padding: 6px 10px;
        `}

    ${({ size, iconRight }) =>
        size === 'm' &&
        iconRight &&
        css`
            padding-right: 5px;

            ${StyledButtonText} {
                padding-right: 5px;
            }
        `}

    ${({ size, iconLeft }) =>
        size === 'm' &&
        iconLeft &&
        css`
            padding-left: 5px;

            ${StyledButtonText} {
                padding-left: 5px;
            }
        `}

    ${({ size }) =>
        size === 'l' &&
        css`
            font-size: 16px;
            font-weight: 500;

            padding: 8px 14px;
        `}

    ${({ size, iconRight }) =>
        size === 'l' &&
        iconRight &&
        css`
            padding-right: 7px;

            ${StyledButtonText} {
                padding-right: 7px;
            }
        `}

    ${({ size, iconLeft }) =>
        size === 'l' &&
        iconLeft &&
        css`
            padding-left: 7px;

            ${StyledButtonText} {
                padding-left: 7px;
            }
        `}
`;

const StyledButtonDefault = styled(StyledButton)`
    color: ${buttonTextColor};

    background-color: ${buttonBackgroundColor};

    border: 1px solid ${buttonBorderColor};

    svg {
        color: ${buttonTextColor};
    }
`;

const StyledButtonPrimary = styled(StyledButton)`
    color: ${buttonPrimaryTextColor};

    background-color: ${buttonPrimaryBackgroundColor};

    border: 0;

    svg {
        color: ${buttonPrimaryTextColor};
    }
`;

const StyledButtonText = styled.span`
    display: flex;
`;

export const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ view = 'default', size = 'm', iconLeft, iconRight, children, onClick }, ref) => {
        const Wrapper = ({
            default: StyledButtonDefault,
            primary: StyledButtonPrimary,
        } as Record<typeof view, typeof StyledButton>)[view];

        const content = [];
        if (iconLeft) content.push(<Icon size="xs" type={iconLeft} key="iconLeft" />);
        content.push(<StyledButtonText key="text">{children}</StyledButtonText>);
        if (iconRight) content.push(<Icon size="xs" type={iconRight} key="iconRight" />);

        return (
            <Wrapper ref={ref} iconLeft={iconLeft} iconRight={iconRight} size={size} onClick={onClick} type="button">
                {content}
            </Wrapper>
        );
    },
);

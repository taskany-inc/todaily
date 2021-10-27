import React, { ComponentProps } from 'react';
import Tippy from '@tippyjs/react/headless';
import styled from 'styled-components';

/**
 * @see all props https://atomiks.github.io/tippyjs/v6/all-props/
 */
interface PopupProps {
    placement: ComponentProps<typeof Tippy>['placement'];
    trigger: ComponentProps<typeof Tippy>['trigger'];
    interactive: ComponentProps<typeof Tippy>['interactive'];
    hideOnClick: ComponentProps<typeof Tippy>['hideOnClick'];
    visible: boolean;
    target: React.ReactElement;
    arrow: boolean;

    onTrigger: ComponentProps<typeof Tippy>['onTrigger'];
    onShow: ComponentProps<typeof Tippy>['onShow'];
    onShown: ComponentProps<typeof Tippy>['onShown'];
    onMount: ComponentProps<typeof Tippy>['onMount'];
    onHide: ComponentProps<typeof Tippy>['onHide'];
    onHidden: ComponentProps<typeof Tippy>['onHidden'];
    onClickOutside: ComponentProps<typeof Tippy>['onClickOutside'];
}

const StyledPopupArrow = styled.div`
    visibility: hidden;
    position: absolute;

    width: 8px;
    height: 8px;

    background: inherit;

    &::before {
        visibility: visible;
        position: absolute;

        width: 8px;
        height: 8px;

        background: inherit;

        content: '';

        transform: rotate(45deg);
    }
`;

const StyledPopupContainer = styled.div`
    background: #333;

    color: white;
    font-size: 13px;

    padding: 4px 8px;

    border-radius: 4px;

    &[data-placement^='top'] > ${StyledPopupArrow} {
        bottom: -4px;
    }

    &[data-placement^='bottom'] > ${StyledPopupArrow} {
        top: -4px;
    }

    &[data-placement^='left'] > ${StyledPopupArrow} {
        right: -4px;
    }

    &[data-placement^='right'] > ${StyledPopupArrow} {
        left: -4px;
    }
`;

/**
 * @see https://github.com/atomiks/tippyjs-react
 * Styling https://popper.js.org/docs/v2/tutorial/#styling
 */
export const Popup: React.FC<PopupProps> = ({ placement = 'auto', children, target, arrow = true, ...props }) => (
    <Tippy
        {...props}
        placement={placement}
        render={(attrs) => (
            <StyledPopupContainer tabIndex={-1} {...attrs}>
                {children}
                {arrow && <StyledPopupArrow data-popper-arrow />}
            </StyledPopupContainer>
        )}
        popperOptions={{
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        // https://popper.js.org/docs/v2/tutorial/#offset
                        offset: [0, 8],
                    },
                },
            ],
        }}
    >
        {target}
    </Tippy>
);

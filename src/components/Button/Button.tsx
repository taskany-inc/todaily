import React from 'react';
import styled, { css } from 'styled-components';

import { buttonTextColor, buttonBackgroundColor, buttonBorderColor } from '../../@generated/themes';

interface ButtonProps {
    type?: 'default' | 'primary';
    size: 's' | 'm' | 'l';
}

const StyledButton = styled.button<{ size: ButtonProps['size']}>`
    appearance: none;

    display: inline-block;

    border-radius: 6px;

    ${({ size }) => size === 's' && css`
        font-size: 12px;
        font-weight: 600;

        padding: 5px 9px;
    `}
`;

const StyledButtonDefault = styled(StyledButton)`
    color: ${buttonTextColor};

    background-color: ${buttonBackgroundColor};

    border: 1px solid ${buttonBorderColor};
`;

const StyledButtonPrimary = styled(StyledButton)`
`;

export const Button: React.FC<ButtonProps> = ({ type = 'default', size, children }) => {
    const wrappersMap: Record<typeof type, React.FC> = {
        default: StyledButtonDefault,
        primary: StyledButtonPrimary,
    };

    const Wrapper = wrappersMap[type];

    return (
        <Wrapper size={size}>{children}</Wrapper>
    );
};

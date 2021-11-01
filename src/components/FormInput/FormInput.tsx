import React from 'react';
import styled, { css } from 'styled-components';

import { textColorPrimary, inputPlaceholderColor, textFontFamily, inputBorderColor } from '../../@generated/themes';

interface FormInputProps {
    id?: string;
    name?: string;
    value?: string | number;
    defaultValue?: string | number;
    tabIndex?: number;
    inputMode?: 'decimal' | 'numeric' | 'text' | 'url' | 'email' | 'search' | 'tel';
    controlRef?: React.Ref<HTMLInputElement>;
    autoFocus?: boolean;
    autoComplete?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: 'm' | 'l' | 'xl';
    iconRight?: React.ReactNode;

    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onInput?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const StyledInput = styled(({ size, iconRight, ...props }) => <input {...props} />)<{
    size: FormInputProps['size'];
    iconRight: FormInputProps['iconRight'];
}>`
    box-sizing: border-box;
    outline: none;

    border: 0;
    border-radius: 4px;

    ${({ iconRight }) =>
        iconRight ?
        css`
            width: calc(100% - 42px);
        ` : css`
            width: 100%;
        `}

    background-color: transparent;

    color: ${textColorPrimary};
    font-weight: 600;

    ${({ size }) =>
        size === 'm' &&
        css`
            font-size: 22px;
            padding: 8px 10px;
        `}

    ${({ size }) =>
        size === 'l' &&
        css`
            font-size: 28px;
            padding: 8px 10px;
        `}

    ${({ size }) =>
        size === 'xl' &&
        css`
            font-size: 32px;
            padding: 12px 14px;
        `}

    &:focus {
        box-shadow: 0 0 0 1px ${inputBorderColor};
    }

    &::placeholder {
        color: ${inputPlaceholderColor};
        font-family: ${textFontFamily};
    }
`;

const StyledIconWrapper = styled.div`
    padding: 0 12px;
`;

export const FormInput: React.FC<FormInputProps> = ({
    id,
    name,
    value,
    defaultValue,
    tabIndex,
    inputMode,
    controlRef,
    autoFocus,
    autoComplete,
    placeholder,
    disabled,
    size,
    iconRight,
    onChange,
    onInput,
    onBlur,
    onFocus,
}) => (
    <StyledWrapper>
        <StyledInput
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            tabIndex={tabIndex}
            inputMode={inputMode}
            ref={controlRef}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            placeholder={placeholder}
            disabled={disabled}
            size={size}
            iconRight={iconRight}
            onChange={onChange}
            onInput={onInput}
            onBlur={onBlur}
            onFocus={onFocus}
        />

        {iconRight && <StyledIconWrapper>{iconRight}</StyledIconWrapper>}
    </StyledWrapper>
);

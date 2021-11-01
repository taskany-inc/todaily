import React from 'react';
import styled, { css } from 'styled-components';

import { inputBorderColor, backgroundColorPrimary } from '../../@generated/themes';
import { User } from '../User/User';

interface TimelineCommentProps {
    image: string;
    size?: 'm' | 'l' | 'xl';
}

const StyledTimelineComment = styled.div<{ size: TimelineCommentProps['size'] }>`
    position: relative;

    ${({ size }) =>
        size === 'm' &&
        css`
            padding-left: 64px;
        `}

    ${({ size }) =>
        size === 'xl' &&
        css`
            padding-left: 71px;
        `}
`;

const StyledTimelineUser = styled.div<{ size: TimelineCommentProps['size'] }>`
    position: relative;
    float: left;

    ${({ size }) =>
        size === 'm' &&
        css`
            margin-left: -64px;
        `}

    ${({ size }) =>
        size === 'xl' &&
        css`
            top: 10px;
            margin-left: -71px;
        `}
`;

const StyledTimelineCommentContent = styled.div<{ size: TimelineCommentProps['size'] }>`
    position: relative;

    max-width: 980px;
    min-height: 200px;

    border: 1px solid ${inputBorderColor};
    border-radius: 6px;

    padding: 10px 12px;

    &::before {
        position: absolute;

        ${({ size }) =>
            size === 'm' &&
            css`
                top: 17px;
            `}

        ${({ size }) =>
            size === 'xl' &&
            css`
                top: 32px;
            `}

        right: 100%;
        left: -8px;
        display: block;
        width: 8px;
        height: 16px;
        pointer-events: none;
        content: ' ';
        clip-path: polygon(0 50%, 100% 0, 100% 100%);

        background-color: ${inputBorderColor};
    }

    &::after {
        position: absolute;

        ${({ size }) =>
            size === 'm' &&
            css`
                top: 17px;
            `}

        ${({ size }) =>
            size === 'xl' &&
            css`
                top: 32px;
            `}

        right: 100%;
        left: -8px;
        display: block;
        width: 8px;
        height: 16px;
        pointer-events: none;
        content: ' ';
        clip-path: polygon(0 50%, 100% 0, 100% 100%);

        margin-left: 1px;

        background-color: ${backgroundColorPrimary};
    }
`;

export const TimelineComment: React.FC<TimelineCommentProps> = ({ image, size = 'm', children }) => {
    const imgSize: Record<typeof size, number> = {
        'm': 48,
        'l': 48,
        'xl': 54,
    };

    return (
        <StyledTimelineComment size={size}>
            <StyledTimelineUser size={size}>{<User src={image} size={imgSize[size]} />}</StyledTimelineUser>

            <StyledTimelineCommentContent size={size}>{children}</StyledTimelineCommentContent>
        </StyledTimelineComment>
    );
};

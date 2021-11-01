import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { iconColorPrimary } from '../../@generated/themes';

const componentsMap = {
    plusCircle: dynamic(() => import('teenyicons/outline/plus-circle.svg')),
    user: dynamic(() => import('teenyicons/outline/user.svg')),
    cog: dynamic(() => import('teenyicons/outline/cog.svg')),
    search: dynamic(() => import('teenyicons/outline/search.svg')),
    heart: dynamic(() => import('teenyicons/outline/heart.svg')),
    chat: dynamic(() => import('teenyicons/outline/chat.svg')),
    moreVertical: dynamic(() => import('teenyicons/outline/more-vertical.svg')),
    markdown: dynamic(() => import('teenyicons/outline/markdown.svg')),
    tag: dynamic(() => import('teenyicons/outline/tag.svg')),
    image: dynamic(() => import('teenyicons/outline/image-alt.svg')),
};

export const iconTypes = Object.keys(componentsMap);

const sizesMap = {
    xs: 16,
    s: 18,
    m: 32,
    l: 48,
};

interface IconProps {
    type: keyof typeof componentsMap;
    size: keyof typeof sizesMap;
    color?: string;
    stroke?: number;
    onClick?: (e: React.MouseEvent) => void;
}

const StyledIcon = styled.span`
    display: flex;
    position: relative;
    top: 2px;
`;

export const Icon: React.FC<IconProps> = ({ type, size, color = iconColorPrimary, stroke = 1, onClick }) => {
    const Component: React.ComponentType<any> = componentsMap[type];
    const sizePx = `${sizesMap[size]}px`;

    return (
        <StyledIcon onClick={onClick}>
            <Component width={sizePx} height={sizePx} color={color} strokeWidth={stroke} />
        </StyledIcon>
    );
};

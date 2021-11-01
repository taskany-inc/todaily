import React from 'react';
import styled, { css } from 'styled-components';

import { textColorTertiary } from '../../@generated/themes';
import { Icon } from '../Icon/Icon';

const StyledWrapper = styled.div`
    padding: 6px 0 6px 12px;
    display: flex;
    align-items: center;

    color: ${textColorTertiary};
`;

const StyledText = styled.span`
    display: inline-block;

    padding-left: 10px;
    padding-top: 2px;

    font-size: 12px;
`;

export const StylingWithMarkdown: React.FC = () => (
    <StyledWrapper>
        <Icon type="markdown" size="s" color={textColorTertiary} />

        <StyledText>Styling with markdown is supported</StyledText>
    </StyledWrapper>
);

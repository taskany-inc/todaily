import React from 'react';
import styled, { css } from 'styled-components';

import { textColorPrimary, menuItemColorHover } from '../../@generated/themes';

interface ListProps {
    ordered?: boolean;
    children: React.ReactElement<typeof ListItem>[];
}

const StyledList = styled.ul`
    margin: 0;
    padding: 0;

    list-style: none;
`;

const StyledOrderedList = styled.ol`
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    padding: 6px 10px;
`;

export const List: React.FC<ListProps> = ({ ordered, children }) => {
    const Wrapper = ordered ? StyledOrderedList : StyledList;

    return <Wrapper>{children}</Wrapper>;
};

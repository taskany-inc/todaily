import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { Button } from '../Button/Button';
import { Popup } from '../Popup/Popup';
import { Menu } from '../Menu/Menu';

interface DropdownProps {
    text: string;
    size?: React.ComponentProps<typeof Button>['size'];
    view?: React.ComponentProps<typeof Button>['view'];
    type: React.ComponentProps<typeof Menu>['type'];
    items: React.ComponentProps<typeof Menu>['items'];
    placement?: React.ComponentProps<typeof Popup>['placement'];
    minWidth?: React.ComponentProps<typeof Popup>['minWidth'];
    onChange?: React.ComponentProps<typeof Menu>['onChange'];
    onClick?: React.ComponentProps<typeof Button>['onClick'];
}

const StyledDropdown = styled.div``;

export const Dropdown: React.FC<DropdownProps> = ({ size = 'm', text, items, type, view = 'default', onChange, onClick, minWidth }) => {
    const target = (
        <Button size={size} view={view} iconRight="moreVertical" onClick={onClick}>
            {text}
        </Button>
    );

    return (
        <StyledDropdown>
            <Popup target={target} minWidth={minWidth} trigger="click" interactive overflow="hidden">
                <Menu type={type} items={items} onChange={onChange} />
            </Popup>
        </StyledDropdown>
    );
};

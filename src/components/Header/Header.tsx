import React from 'react';
import styled from 'styled-components';

import { iconColorPrimary } from '../../@generated/themes';
import { useComponents } from '..';
import { Icon } from '../Icon/Icon';
import { User } from '../User/User';
import { Popup } from '../Popup/Popup';
import { Link } from '../Link/Link';
import { List, ListItem } from '../List/List';
import { routes } from '../../hooks/router';

const StyledHeader = styled.header`
    position: relative;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledAlignContainer = styled.div`
    display: flex;
`;

const StyledHeaderItem = styled.div`
    display: flex;
    align-items: center;

    &:last-child {
        margin-right: 0;
    }
`;

const StyledCreateButton = styled.div`
    margin-right: 20px;

    cursor: pointer;
`;

const ServicesSwitch = styled.div`
    position: absolute;

    margin-top: 5px;
    margin-left: -25px;

    opacity: 0.6;
`;

export const Header: React.FC = () => {
    const { Logo, ServiceMenu } = useComponents();

    return (
        <StyledHeader>
            <StyledAlignContainer>
                <ServicesSwitch>
                    <Icon inline type="moreVertical" size="s" color={iconColorPrimary} />
                </ServicesSwitch>

                <StyledHeaderItem>
                    <Logo size="m" />
                </StyledHeaderItem>

                <StyledHeaderItem>
                    <ServiceMenu />
                </StyledHeaderItem>

                <StyledHeaderItem>
                    <Icon inline type="search" size="xs" color={iconColorPrimary} />
                </StyledHeaderItem>
            </StyledAlignContainer>

            <StyledAlignContainer>
                <StyledHeaderItem>
                    <Popup
                        interactive
                        overflow="hidden"
                        minWidth={150}
                        target={
                            <StyledCreateButton>
                                <Icon inline type="plusCircle" size="xs" color={iconColorPrimary} />
                            </StyledCreateButton>
                        }
                    >
                        <List>
                            <ListItem interactive>
                                <Link href={routes.createPost()}>New post</Link>
                            </ListItem>
                            <ListItem interactive>
                                <Link href={routes.createChannel()}>New channel</Link>
                            </ListItem>
                        </List>
                    </Popup>
                </StyledHeaderItem>

                <StyledHeaderItem>
                    <User size={32} src="https://avatars.githubusercontent.com/u/982072?v=4" />
                </StyledHeaderItem>
            </StyledAlignContainer>
        </StyledHeader>
    );
};

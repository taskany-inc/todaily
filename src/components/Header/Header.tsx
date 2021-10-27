import React from 'react';
import styled from 'styled-components';

import { iconColorPrimary } from '../../@generated/themes';
import { useComponents } from '..';
import { Icon } from '../Icon/Icon';
import { User } from '../User/User';

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
`;

const ServicesSwitch = styled.div`
    position: absolute;

    margin-top: 5px;
    margin-left: -25px;

    opacity: .6;
`;

export const Header: React.FC = () => {
    const { Logo, ServiceMenu } = useComponents();

    return (
        <StyledHeader>
            <StyledAlignContainer>
                <ServicesSwitch>
                    <Icon type="moreVertical" size="s" color={iconColorPrimary} />
                </ServicesSwitch>

                <StyledHeaderItem>
                    <Logo size="m" />
                </StyledHeaderItem>

                <StyledHeaderItem>
                    <ServiceMenu />
                </StyledHeaderItem>

                <StyledHeaderItem>
                    <Icon type="search" size="xs" color={iconColorPrimary} />
                </StyledHeaderItem>
            </StyledAlignContainer>

            <StyledAlignContainer>
                <StyledHeaderItem>
                    <StyledCreateButton>
                        <Icon type="plusCircle" size="xs" color={iconColorPrimary} />
                    </StyledCreateButton>
                </StyledHeaderItem>

                <StyledHeaderItem>
                    <User size={32} src="https://avatars.githubusercontent.com/u/982072?v=4" />
                </StyledHeaderItem>
            </StyledAlignContainer>
        </StyledHeader>
    );
};

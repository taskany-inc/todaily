import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledServiceMenu = styled.ul`
    list-style: none;
    margin: 0;
    padding: 2px 0 0 60px;
    display: inline-block;
`;

const StyledServiceMenuItem = styled.li`
    display: inline-block;
`;

const StyledNavLink = styled.a`
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-weight: 500;

    padding-right: 40px;
`;

export const ServiceMenu: React.FC = () => {
    // const { asPath } = useRouter();

    return (
        <StyledServiceMenu>
            <StyledServiceMenuItem>
                <Link href="/" passHref>
                    <StyledNavLink>Лента</StyledNavLink>
                </Link>
            </StyledServiceMenuItem>
            
            <StyledServiceMenuItem>
                <Link href="/explore" passHref>
                    <StyledNavLink>Всё</StyledNavLink>
                </Link>
            </StyledServiceMenuItem>
        </StyledServiceMenu>
    );
};

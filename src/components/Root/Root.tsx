import React from 'react';
import { withRegistry, Registry } from '@bem-react/di';
import styled from 'styled-components';

import { componentsRegistry, useComponents } from '..';
import componentsOverrides from '../../../.todaily/components';

const componentsOverridesRegistry = new Registry({ id: 'ComponentsRegistry' });
componentsOverridesRegistry.fill(componentsOverrides);

const StyledContent = styled.main`
    padding: 60px 0 0 40px;
`;

export const Root = withRegistry(
    componentsOverridesRegistry,
    componentsRegistry,
)(({ children }) => {
    const { Header } = useComponents();

    return (
        <>
            <Header />

            <StyledContent>{children}</StyledContent>
        </>
    );
});

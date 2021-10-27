import React from 'react';
import { withRegistry, Registry } from '@bem-react/di';

import { componentsRegistry, useComponents } from '..';
import componentsOverrides from '../../../.todaily/components';

const componentsOverridesRegistry = new Registry({ id: 'ComponentsRegistry' });
componentsOverridesRegistry.fill(componentsOverrides);

export const Root = withRegistry(componentsOverridesRegistry, componentsRegistry)(({ children }) => {
    const { Header } = useComponents();

    return (
        <>
            <Header />

            {children}
        </>
    );
});

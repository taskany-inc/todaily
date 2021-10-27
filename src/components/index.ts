import { Registry, useRegistry } from '@bem-react/di';

import { Logo } from './Logo/Logo';
import { Header } from './Header/Header';
import { ServiceMenu } from './ServiceMenu/ServiceMenu';

const componentsDict = {
    Logo,
    Header,
    ServiceMenu,
};

export type ComponentsOverrides = Partial<typeof componentsDict>;
export const componentsRegistry = new Registry({ id: 'ComponentsRegistry' });
export const useComponents = (): typeof componentsDict => useRegistry('ComponentsRegistry');

componentsRegistry.fill(componentsDict);


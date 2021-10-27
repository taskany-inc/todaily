import React, { createContext } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const themes = {
    dark: dynamic(() => import('../../@generated/themes/dark')),
    light: dynamic(() => import('../../@generated/themes/light')),
};

export const themeContext = createContext<{ theme?: string }>({});

export const ThemeProvider = themeContext.Provider;

export const Theme: React.FC<{ theme: keyof typeof themes }> = ({ theme }) => {
    const ThemeComponent = themes[theme];

    return <ThemeComponent />;
};

import { GlobalStyle } from '../src/components/GlobalStyle/GlobalStyle';
import { Theme, ThemeProvider } from '../src/components/Theme/Theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

/**
 * @see icons https://5a375b97f4b14f0020b0cda3-wbeulgbetj.chromatic.com/?path=/story/basics-icon--labels
 */
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', title: 'light', icon: 'circlehollow' },
                { value: 'dark', title: 'dark', icon: 'circle' },
            ],
            showName: true,
        },
    },
};

const withThemeProvider = (Story, context) => {
    const theme = context.globals.theme;

    return (
        <>
            <GlobalStyle />
            <Theme theme={theme} />

            <ThemeProvider value={{ theme }}>
                <Story {...context} />
            </ThemeProvider>
        </>
    );
};

export const decorators = [withThemeProvider];

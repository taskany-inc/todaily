/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import head from '../../.todaily/head';

import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { Theme, ThemeProvider } from '../components/Theme/Theme';
import { Root } from '../components/Root/Root';
import { textFontUrl } from '../@generated/themes';

interface ExternalContent {
    type: 'style' | 'script';
    url?: string;
    content?: string;
}

const apolloClient = new ApolloClient({
    uri: '/api/gql',
    cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const theme = 'dark';

    return (
        <>
            <Head>
                {textFontUrl && <link rel="stylesheet" href={textFontUrl} />}

                {(head as Array<ExternalContent>).map((external, i) => {
                    if (external.type === 'style') {
                        if (external.url) {
                            return <link key={external.url} rel="stylesheet" href={external.url}/>;
                        }
                        if (external.content) {
                            return <style key={i}>{external.content}</style>;
                        }
                    }
                    if (external.type === 'script') {
                        if (external.url) {
                            return <script key={external.url} src={external.url}/>;
                        }
                        if (external.content) {
                            return <script key={i}>{external.content}</script>;
                        }
                    }
                })}
            </Head>

            <GlobalStyle />

            <Theme theme={theme} />

            <ApolloProvider client={apolloClient}>
                <ThemeProvider value={{ theme }}>
                    <Root>
                        <Component {...pageProps} />
                    </Root>
                </ThemeProvider>
            </ApolloProvider>
        </>
    );
};

export default App;

import { createGlobalStyle } from 'styled-components';

import { textFontFamily, backgroundColorPrimary } from '../../@generated/themes';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${textFontFamily};
        font-size: 14px;

        background-color: ${backgroundColorPrimary};
    }
`;

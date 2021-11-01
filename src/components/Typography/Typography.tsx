import styled from 'styled-components';

import { textColorPrimary } from '../../@generated/themes';

export const H1 = styled.h1`
    margin: 0 0 40px 0;

    font-size: 48px;
    font-weight: 600;
    color: ${textColorPrimary};
`;

export const H2 = styled.h2`
    margin: 0;

    font-size: 32px;
    font-weight: 500;
    color: ${textColorPrimary};
`;

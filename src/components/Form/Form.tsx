import React from 'react';
import styled from 'styled-components';

import { formBackgroundColor } from '../../@generated/themes';

const StyledForm = styled.form`
    border-radius: 4px;

    background-color: ${formBackgroundColor};
`;

export const Form: React.FC = ({ children }) => {
    return (
        <StyledForm>{children}</StyledForm>
    );
}

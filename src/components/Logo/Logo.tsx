import React, { useContext } from 'react';
import styled from 'styled-components';

import { iconColorPrimary } from '../../@generated/themes';
import { themeContext } from '../Theme/Theme';

const sizesMap = {
    s: 24,
    m: 32,
    l: 48,
};

interface LogoProps {
    size?: keyof typeof sizesMap;
}

const StyledLogo = styled.div`
    display: flex;
`;

export const Logo: React.FC<LogoProps> = ({ size = 's' }) => {
    const sizePx = `${sizesMap[size]}px`;

    return (
        <StyledLogo>
            <svg
                width={sizePx}
                height={sizePx}
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 13L10 11M12 12L14 10M12 21V8"
                    stroke={iconColorPrimary}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.82399 15.995C9.38646 15.9694 8.95986 15.8482 8.57419 15.64C8.18853 15.4318 7.85316 15.1416 7.59169 14.7899C7.33022 14.4381 7.149 14.0334 7.06077 13.6041C6.97253 13.1748 6.97944 12.7314 7.08099 12.305C6.71807 12.0033 6.4315 11.6203 6.24458 11.1869C6.05766 10.7536 5.97568 10.2823 6.0053 9.81128C6.03493 9.34029 6.17533 8.88294 6.41507 8.47645C6.65481 8.06997 6.98713 7.72581 7.38499 7.472C7.03636 6.85266 6.91894 6.12965 7.05365 5.43181C7.18836 4.73397 7.56645 4.10662 8.12055 3.66153C8.67466 3.21645 9.36878 2.98255 10.0793 3.00149C10.7897 3.02044 11.4704 3.29102 12 3.765C12.5297 3.29177 13.2101 3.02183 13.9202 3.00325C14.6303 2.98467 15.3239 3.21865 15.8777 3.66353C16.4314 4.10842 16.8093 4.73535 16.9441 5.43275C17.079 6.13015 16.962 6.85277 16.614 7.472C17.0121 7.72559 17.3447 8.06962 17.5846 8.47607C17.8246 8.88253 17.9652 9.33991 17.9949 9.81098C18.0246 10.282 17.9427 10.7535 17.7557 11.1869C17.5687 11.6203 17.2821 12.0034 16.919 12.305C17.024 12.7458 17.0277 13.2046 16.93 13.6471C16.8322 14.0896 16.6356 14.5041 16.3547 14.8597C16.0738 15.2152 15.716 15.5025 15.3082 15.7C14.9004 15.8975 14.4531 16.0001 14 16H14.001H10.001L9.82399 15.995Z"
                    stroke="#17b978"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </StyledLogo>
    );
};
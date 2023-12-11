import styled, { css } from "styled-components";
export const NoPoster = styled.img`
    max-width: 312px;
    max-height: 464px;
    width: 100%;
    margin: 0 40px 0 0;
    float: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 114px;
        max-height: 169px;
        margin: 0;
    };

    ${({ small }) => 
            small &&
            css`
                width: auto;
                max-height: 434px;

                @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
                    max-height: 169px;
                }
    `}
`;

export const NoPhoto = styled.img`
    width: 399px;
    height: 598px;
    border-radius: 5px;
    float: left;
    margin: 0 40px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 116px;
        height: 174px;
        margin: 0;
    }

    ${({ small }) =>
            small &&
            css`
                max-height: 264px;
                float: unset;
                @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
                    max-height: 178px;
                }
    `}
`;

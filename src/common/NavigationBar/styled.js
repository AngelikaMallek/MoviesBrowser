import styled from "styled-components";

export const StyledNavigationBar = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    width: 100%;
    margin: 0;
    padding: 0 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        padding: 0 16px;
    }
`;
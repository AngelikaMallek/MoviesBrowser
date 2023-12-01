import styled from "styled-components";

export const StyledNavigationBar = styled.div`
    background-color: ${({ theme }) => theme.color.woodsmoke};
    width: 100%;
    height: 94px;
    margin: 0;
    padding: 0 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
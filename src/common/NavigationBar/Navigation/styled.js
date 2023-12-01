import styled from "styled-components";

export const StyledNavigation = styled.div`
    margin: 0;
    padding: 0;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    background-color: ${({ theme }) => theme.color.woodsmoke};
    border: none;
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;  
    letter-spacing: -1.5px;
    text-transform: capitalize;
`;

export const Links = styled.div`

`;

export const LinkButton = styled.a`
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
`;
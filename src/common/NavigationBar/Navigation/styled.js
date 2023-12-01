import styled from "styled-components";

export const StyledNavigation = styled.nav`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
    }
`;

export const Links = styled.div`
    display: inline-flex;
    gap: 16px;
`;

export const LinkButton = styled.a`
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.color.white};
    padding: 14px 24px;
    border-radius: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {  
        font-size: 12px;
        font-weight: 600;
        padding: 8px 12px;
    }
`;
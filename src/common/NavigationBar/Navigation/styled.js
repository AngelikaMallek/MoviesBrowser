import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.nav`
    display: flex;
    gap: 80px;
	width: 100%;
    align-items: center;
    padding: 27px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
	    justify-content: space-between;
	    gap: 5px;
        padding: 16px;
    };
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: ${({ theme }) => theme.color.black};
    border: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
	    gap: 5px;
    };
`;

export const Title = styled(Link)`
    color: ${({ theme }) => theme.color.white};
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;  
    letter-spacing: -1.5px;
    text-transform: capitalize;
    text-decoration: none;

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

export const LinkButton = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 8px 24px;
    text-decoration: none;

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {  
        font-size: 12px;
        font-weight: 600;
        padding: 8px 12px;
    }
`;
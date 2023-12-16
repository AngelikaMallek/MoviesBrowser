import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 103px;
    padding-top: 40px;
    gap: 24px;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        gap: 8px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 12px;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        gap: 8px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        gap: 2px;
    }
`;

export const Button = styled(Link)`
    border: none;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.pattensBlue};
    cursor: pointer;
    text-decoration: none;

    &:disabled {
        background-color: ${({ theme }) => theme.color.mystic};
        color: ${({ theme }) => theme.color.woodsmoke};
        cursor: not-allowed;
        pointer-events: none;
    }

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        gap: 4px;
    }
`;

export const Paragraph = styled.p`
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        display: none;
    }
`;

export const Page = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 150%;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        font-size: 10px;
        line-height: 24px;
    }
`;

export const Number = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        font-size: 10px;
        line-height: 24px;
    }
`;

export const ArrowStyled = styled(Arrow)`
    color: ${({ theme }) => theme.color.scienceBlue};
    width: 7px;
    height: 11px;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        width: 5px;
        height: 8px;
    }

    ${({right}) => 
        right &&
        css`
            transform: rotate(180deg);
        `}

    ${({disabled}) => 
        disabled &&
        css`
            color: ${({ theme }) => theme.color.waterloo}
        `}

    ${({small}) => 
        small &&
        css`
            display: none;

            @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
                display: inline;
            }
        `}
`;




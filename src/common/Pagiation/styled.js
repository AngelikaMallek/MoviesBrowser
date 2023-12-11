import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 103px;
    padding-top: 40px;
    gap: 24px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const TextWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Button = styled.a`
    text-decoration: none;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.pattensBlue};
    cursor: pointer;
`;

export const Page = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 150%;
    padding: 0;
    margin: 0;
`;

export const Number = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    padding: 0;
    margin: 0;
`;

export const ArrowStyled = styled(Arrow)`
    color: ${({ theme }) => theme.color.scienceBlue};

    ${({right}) => 
        right &&
        css`
            transform: rotate(180deg);
        `}
`;




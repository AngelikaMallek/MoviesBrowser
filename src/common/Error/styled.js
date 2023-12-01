import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    transition: color 0.3s;
    margin: 0;
    padding: 180px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 8px
    }
`;

export const Image = styled.img`
    width: 48px;
    height: 48px;
    margin: 0;
    padding: 0;
`;

export const Paragraph = styled.h3`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-align: center;
    transition: color 0.3s;
    margin: 0;
    padding: 0;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    text-align: center;
    transition: color 0.3s;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 15px;
    }
`;

export const Button = styled.div`
    display: inline-flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid var(--semi-grey, rgba(209, 213, 218, 0.10));
    background: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
`;
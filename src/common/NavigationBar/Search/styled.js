import styled from "styled-components";

export const StyledSearch = styled.div`
    width: 432px;
    height: 48px;
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    background-color: ${({ theme }) => theme.color.white};
    padding: 12px 24px;
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const Input = styled.input`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    border: none;
`;
import styled from "styled-components";
import { ReactComponent as Star } from "../../../common/MovieTile/star.svg";


export const Wrapper = styled.div` 
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    background-color: ${({ theme }) => theme.color.black};
`;

export const Banner = styled.div`
    height: 50vw;
    width: 100%;
    background-image: url("${({ url }) => url}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
`;

export const Vignette = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    gap: 24px;
    padding-left: 100px;
    background: linear-gradient(270deg, #000 14.11%, rgba(0, 0, 0, 0.87) 15.08%, rgba(0, 0, 0, 0.72) 16.51%, rgba(0, 0, 0, 0.29) 19.99%, rgba(0, 0, 0, 0.16) 21.88%, rgba(0, 0, 0, 0.00) 25.68%), linear-gradient(90deg, #000 13.6%, rgba(0, 0, 0, 0.98) 14.58%, rgba(0, 0, 0, 0.97) 15.44%, rgba(0, 0, 0, 0.87) 16.3%, rgba(0, 0, 0, 0.23) 22.87%, rgba(0, 0, 0, 0.00) 26.64%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.69) 4.66%, rgba(0, 0, 0, 0.44) 9.34%, rgba(0, 0, 0, 0.21) 15.16%, rgba(0, 0, 0, 0.00) 24.22%), linear-gradient(189deg, rgba(0, 0, 0, 0.00) 58.48%, rgba(0, 0, 0, 0.11) 63.17%, rgba(0, 0, 0, 0.24) 68.85%, rgba(0, 0, 0, 0.49) 78.08%, rgba(0, 0, 0, 0.74) 85.86%, #000 92.87%);

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        gap: 4px;
        padding-left: 16px;
    }
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 64px;
    font-weight: 600;
    line-height: 120%;
    padding: 0;
    margin: 0;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
    }
`;

export const RatesWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const StyledStar = styled(Star)`
    width: 40px;
    height: 40px;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        width: 16px;
        height: 16px;
    }
`;

export const Rates = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 30px;
    font-weight: 500;
    line-height: 130%;
    padding: 0;
    margin: 0;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        font-weight: 600;
    }
`;

export const MaxRates = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    padding: 0;
    margin: 0;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
    }
`;

export const Votes = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    padding: 0;
    margin: 0;
    padding-bottom: 56px;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
        padding-bottom: 10px;
    }
`;
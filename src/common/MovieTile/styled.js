import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    max-width: 324px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    padding: 16px;
`;

export const Image = styled.img`
    width: 292px;
    height: 434px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.woodsmoke};
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
`;

export const Year = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 150%;
`;

export const Genres = styled.div`
    display: inline-flex;
    padding: 8px 16px;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.color.woodsmoke};
    font-size: 14px;
    line-height: 140%;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.mystic};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Rates = styled.p`
    color: ${({ theme }) => theme.color.woodsmoke};
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
`;

export const Votes = styled.p`
   color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export const MoviesGrid = styled.div`
  	display: grid;
  	grid-gap: 24px;
  	grid-template-columns: repeat(4, 1fr);

  	@media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    	grid-template-columns: repeat(3, 1fr);
  	};

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	grid-template-columns: repeat(2, 1fr);
  	};

  	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    	display: flex;
    	flex-direction: column;
    	gap: 16px;
  	};
`;
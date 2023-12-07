import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "./noPoster.svg";

export const Container = styled(Link)`
    max-width: 324px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    padding: 16px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Image = styled.img`
    width: auto;
    height: 434px;
`;

export const NoPoster = styled.div`
    width: 292px;
    height: 434px;
    background-color: ${({ theme }) => theme.color.silver};
    background-image: url("${noPoster}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.woodsmoke};
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    margin: 0;
    padding: 0;
`;

export const Year = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 150%;
    margin: 0;
    padding: 0;
`;

export const GenresBar = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    gap: 8px;
`;

export const Genres = styled.li`
    list-style: none;
    padding: 8px 16px;
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
    margin-top: auto;
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
    gap: 24px;
  	grid-template-columns: repeat( auto-fill, minmax(300px, 1fr));
`;
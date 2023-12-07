import { Link } from "react-router-dom";
import styled from "styled-components";
import noPhoto from "./noPhoto.svg";

export const Container = styled(Link)`
    text-decoration: none;
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-width: 208px;
    background-color: ${({ theme }) => theme.color.white};
	border-radius: 5px;
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        gap: 8px;
        max-width: 136px;
    }
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.color.woodsmoke};
	text-align: center;
	font-size: 22px;
	font-weight: 500;
	line-height: 130%;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        font-size: 14px;
    }
`;

export const Image = styled.img`
    max-width: 177px;
    height: auto;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        max-width: 120px;
    }
`;

export const NoPhoto = styled.div`
    width: 177px;
    height: 264px;
    background-color: ${({ theme }) => theme.color.silver};
    background-image: url("${noPhoto}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        font-size: 120px;
    }
`;

export const PeopleGrid = styled.div`
    display: grid;
    gap: 24px;
  	grid-template-columns: repeat( auto-fill, minmax(200px, 1fr));

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        font-size: 12px;
    }
`;

export const Character = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => (theme.breakpoints.mobile)} ) {
        font-size: 13px;
        line-height: 130%;
    }
`;

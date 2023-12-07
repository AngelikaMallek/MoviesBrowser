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
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.color.woodsmoke};
	text-align: center;
	font-size: 22px;
	font-weight: 500;
	line-height: 130%;
`;

export const Image = styled.img`
    width: 177px;
    height: 264px;
`;

export const NoPhoto = styled.div`
    width: 177px;
    height: 264px;
    background-color: ${({ theme }) => theme.color.silver};
    background-image: url("${noPhoto}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px;
`;

export const PeopleGrid = styled.div`
    display: grid;
  	grid-gap: 24px;
  	grid-template-columns: repeat(6, 1fr);
`;

export const Character = styled.span`
    color: ${({ theme }) => theme.color.waterloo};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
`;

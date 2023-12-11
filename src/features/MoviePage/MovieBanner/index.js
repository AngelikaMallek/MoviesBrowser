import { Banner, Wrapper , Vignette, Title, RatesWrapper, StyledStar, Rates, Votes, MaxRates } from "./styled";
import { imageURL } from "../../../common/API/APIData";

const MovieBanner = ({ banner, title, rating, votes }) => (
    <Wrapper>
        <Banner url={imageURL + "w1280" + banner}>
            <Vignette>
                <Title>{title ? title : "Unknown"}</Title>
                <RatesWrapper>
                    <StyledStar />
                    <Rates>{rating ? rating.toFixed(1) : "0"}</Rates>
                    <MaxRates>/10</MaxRates>
                </RatesWrapper>
                <Votes>{votes ? votes : "0"} votes</Votes>
            </Vignette>
        </Banner>
    </Wrapper>
);

export default MovieBanner;
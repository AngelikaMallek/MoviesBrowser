import { Banner, Wrapper , Vignette, Title, RatesWrapper, StyledStar, Rates, Votes, MaxRates } from "./styled";
import { imageURL } from "../../../common/API/APIData";

const MovieBanner = ({ banner, title, rating, votes }) => (
    <Wrapper>
        <Banner url={imageURL + "w1280" + banner}>
            <Vignette>
                <Title>{title}</Title>
                <RatesWrapper>
                    <StyledStar />
                    <Rates>{rating}</Rates>
                    <MaxRates>/10</MaxRates>
                </RatesWrapper>
                <Votes>{votes} votes</Votes>
            </Vignette>
        </Banner>
    </Wrapper>
);

export default MovieBanner;
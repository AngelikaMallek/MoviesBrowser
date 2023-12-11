import { Container, Image, Title, Year, GenresBar, Genres,Wrapper, Rates, Votes, WrapperDetalist, StarStyle } from "./styled";
import { imageURL } from "../API/APIData";
import noPoster from "../../images/noPoster.svg";

const MovieTile = ({id, title, date, vote, poster, voteCount, genres}) => (
    <Container to={`/movies/${id}`}>
        {
            poster ? <Image src={imageURL + "/w342/" + poster} alt="Poster" />
            : <Image src={noPoster} alt="Poster"/>
        }
        <WrapperDetalist>
            <Title>{title ? title : "Unknown Title"}</Title>
            <Year>
                {date ? new Date(date).toLocaleDateString(undefined, {
                    year: 'numeric',
                }) : "Unknown"}
            </Year>
            <GenresBar>
                {genres ? genres.map((genre) => (
                    <Genres key={genre}>{genre}</Genres>
                )) : ""}
            </GenresBar>
            <Wrapper>
                <StarStyle />
                <Rates>{vote ? vote.toFixed(1) : "No votes"}</Rates>
                <Votes>{voteCount ? voteCount + " votes" : "No votes"}</Votes>
            </Wrapper>
        </WrapperDetalist>
    </Container>
);

export default MovieTile;
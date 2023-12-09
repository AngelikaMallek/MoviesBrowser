import { Container, Image, Title, Year, GenresBar, Genres,Wrapper, Rates, Votes, NoPoster, WrapperDetalist, StarStyle } from "./styled";
import { imageURL } from "../API/APIData";

const MovieTile = ({id, title, date, vote, poster, voteCount, genres}) => (
    <Container to={`/movies/${id}`}>
        {
            poster ? <Image src={imageURL + "/w342/" + poster} alt={"poster"} />
            : <NoPoster />
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
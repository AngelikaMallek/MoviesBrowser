import { Container, Image, Title, Year, GenresBar, Genres,Wrapper, Rates, Votes, NoPoster } from "./styled";
import { ReactComponent as Star } from "./star.svg";
import { imageURL } from "../API/APIData";

const MovieTile = ({id, title, date, vote, poster, voteCount, genres}) => (
    <Container to={`/movies/${id}`}>
        {
            poster ? <Image src={imageURL + "/w342/" + poster} alt="poster" />
            : <NoPoster />
        }
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
            <Star />
            <Rates>{vote ? vote : "No votes"}</Rates>
            <Votes>{voteCount ? voteCount + " votes" : "No votes"}</Votes>
        </Wrapper>
    </Container>
);

export default MovieTile;
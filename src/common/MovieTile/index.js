import { Container, Image, Title, Year, Genres,Wrapper, Rates, Votes } from "./styled";
import { ReactComponent as Star } from "./star.svg";

const MovieTile = ({title, release_date, vote_average, poster_path, vote_count}) => (
    <Container>
        <Image src={"https://image.tmdb.org/t/p/w342/" + poster_path} alt="poster"></Image>
        <Title>{title ? title : "Unknown Title"}</Title>
        <Year>
            {release_date ? new Date(release_date).toLocaleDateString(undefined, {
                year: 'numeric',
            }) : "Unknown"}
        </Year>
        <Genres>Test</Genres>
        <Wrapper>
            <Star />
            <Rates>{vote_average ? vote_average : "No votes"}</Rates>
            <Votes>{vote_count ? vote_count : "No votes"}</Votes>
        </Wrapper>
    </Container>
);

export default MovieTile;
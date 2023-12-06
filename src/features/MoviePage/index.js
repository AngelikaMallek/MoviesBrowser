import MovieTileDetails from "./MovieTileDetails";
import { Container } from "../../common/Container";
import { MovieWrapper, Title } from "./styled";
import { usePopularMovie } from "./usePopularMovie";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useParams } from "react-router-dom";
import { useCredits } from "./useCredits";
import { MoviesGrid } from "../../common/MovieTile/styled";
import PersonTile from "../../common/PersonTile";
import { PeopleGrid } from "../../common/PersonTile/styled";

const Movie = () => {
    const { id } = useParams();
    const movieId = id;

    const { popularMovie, loading, error } = usePopularMovie(movieId);
    const { credits } = useCredits(movieId);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    try {
        const cast = credits.cast;
        const crew = credits.crew;

        return (
            <MovieWrapper>
                <Container>
                    <MovieTileDetails
                        key={popularMovie.id}
                        poster={popularMovie.poster_path}
                        title={popularMovie.title}
                        year={popularMovie.release_date}
                        production={popularMovie.production_countries.map(
                            country => country.name
                        )}
                        release={popularMovie.release_date}
                        genre={popularMovie.genres.map(
                            genre => genre.name
                        )}
                        rating={popularMovie.vote_average}
                        votes={popularMovie.vote_count}
                        overview={popularMovie.overview}
                    />
                    <Title>Cast</Title>
                    <MoviesGrid>
                        <PeopleGrid>
                            {cast.map((castPerson) => (
                                <PersonTile
                                    key={castPerson.id}
                                    id={castPerson.id}
                                    poster={castPerson.profile_path}
                                    name={castPerson.name}
                                    character={castPerson.character}
                                />
                            ))}
                        </PeopleGrid>
                    </MoviesGrid>
                    <Title>Crew</Title>
                    <MoviesGrid>
                        <PeopleGrid>
                            {crew.map((crewPerson) => (
                                <PersonTile
                                    key={crewPerson.credit_id}
                                    id={crewPerson.id}
                                    profile_path={crewPerson.profile_path}
                                    name={crewPerson.name}
                                    character={crewPerson.job}
                                />
                            ))}
                        </PeopleGrid>
                    </MoviesGrid>
                </Container>
            </MovieWrapper>
        )
    } catch {
        return ""
    }
};

export default Movie;
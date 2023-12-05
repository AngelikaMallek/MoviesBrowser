import MovieTileDetails from "./MovieTileDetails";
import { Container } from "../../common/Container";
import { MovieWrapper, Title } from "./styled";
import { usePopularMovie } from "./usePopularMovie";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useParams } from "react-router-dom";
import { useCredits } from "./useCredits";
import { MoviesGrid } from "../../common/MovieTile/styled";

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
                </Container>
            </MovieWrapper>
        )
    } catch {
        return ""
    }
};

export default Movie;
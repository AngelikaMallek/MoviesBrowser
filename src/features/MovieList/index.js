import { useApiMovieList } from "./useApiMovieList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { Container } from "../../common/Container";
import { Title } from "./styed";
import { useGenres } from "../../common/useGenres";

const MovieList = () => {
    
    const {movieList, loading, error} = useApiMovieList();
    const { genres } = useGenres();

    if(loading) {
        return <Loading />
    }

    if(error) { 
        return <Error />
    }

    try {

        const movies = movieList.results;

        return (
            <Container>
                <Title>Popular movies</Title>
                <MoviesGrid>
                    {movies ? movies.map((movie) => (
                        <MovieTile 
                            key={movie.id} 
                            id={movie.id}
                            title={movie.title}
                            release_date={movie.release_date}
                            vote_average={movie.vote_average}
                            poster_path={movie.poster_path}
                            vote_count={movie.vote_count}
                            genres={movie.genre_ids.map((id) =>
								genres.genres.find((genre) =>
									genre.id === id).name
							)}
                        />
                    )) : ""}
                </MoviesGrid>
            </Container>
        );
    } catch {
        return "błąd";
    }
}

export default MovieList;
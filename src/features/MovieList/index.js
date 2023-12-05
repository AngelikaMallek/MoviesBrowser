import { useApiMovieList } from "./useApiMovieList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { Container } from "../../common/Container";
import { Title } from "./styed";

const MovieList = () => {
    
    const {movieList, loading, error} = useApiMovieList();

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
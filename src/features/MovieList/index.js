import { useApiMovieList } from "./useApiMovieList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { Container } from "../../common/Container";
import { Title } from "./styed";
import { useGenres } from "../../common/useGenres";
import Pagination from "../../common/Pagiation";

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
                            date={movie.release_date}
                            vote={movie.vote_average}
                            poster={movie.poster_path}
                            voteCount={movie.vote_count}
                            genres={movie.genre_ids.map((id) =>
								genres.genres.find((genre) =>
									genre.id === id).name
							)}
                        />
                    )) : ""}
                </MoviesGrid>
                <Pagination />
            </Container>
        );
    } catch {
        
    }
}

export default MovieList;
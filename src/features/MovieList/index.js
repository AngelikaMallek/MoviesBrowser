import { useRepositories } from "./useApiMovieList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import MovieTile from "../../common/MovieTile";
import { MoviesGrid } from "../../common/MovieTile/styled";
import { Container } from "../../common/Container";
import { Title } from "./styed";

const MovieList = () => {
    
    const {repositories, loading, error} = useRepositories();

    if(loading) {
        return <Loading />
    }

    if(error) { 
        return <Error />
    }

    try {

        const repos = repositories.results;

        return (
            <Container>
                <Title>Popular movies</Title>
                <MoviesGrid>
                    {repos ? repos.map((repository) => (
                        <MovieTile 
                            key={repository.id} 
                            title={repository.title}
                            release_date={repository.release_date}
                            vote_average={repository.vote_average}
                            poster_path={repository.poster_path}
                            vote_count={repository.vote_count}
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
import { useRepositories } from "./useApiMovieList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import MovieTile from "../../common/MovieTile";

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
            <>
                {repos ? repos.map((repository) => (
                    <MovieTile 
                        key={repository.id} 
                        title={repository.title}
                        release_date={repository.release_date}
                        vote_average={repository.vote_average}
                    />
                )) : ""}
            </>
        );
    } catch {
        return "błąd";
    }
}

export default MovieList;
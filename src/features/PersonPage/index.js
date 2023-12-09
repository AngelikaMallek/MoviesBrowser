import { useParams } from "react-router-dom";
import { usePopularPerson } from "./usePopularPerson";
import PersonTileDetalis from "./PersonTileDetalis";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import { useCredits } from "./useCredits";
import MovieTile from "../../common/MovieTile";
import { Container } from "../../common/Container";
import { MoviesGrid } from "../../common/MovieTile/styled";
import {useGenres} from "../../common/useGenres";
import {Title} from "./styled";

const PersonPage = () => {
    const { id } = useParams();
    const personId = id;

    const { popularPerson, loading, error } = usePopularPerson(personId);

    const { credits } = useCredits(personId);

    const { genres } = useGenres();

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    try {
        const casts = credits.cast;
        const crews = credits.crew;
        return(
            <Container>
                <PersonTileDetalis
                    key={popularPerson.id}
                    poster={popularPerson.profile_path}
                    name={popularPerson.name}
                    birthDate={popularPerson.birthday}
                    birthPlace={popularPerson.place_of_birth}
                    description={popularPerson.biography}
                />
                <Title>Cast</Title>
                <MoviesGrid>
                    {casts.map((cast) => (
                        <MovieTile
                            key={cast.id}
                            title={cast.title}
                            date={cast.release_date}
                            vote={cast.vote_average}
                            poster={cast.poster_path}
                            voteCount={cast.vote_count}
                            genres={cast.genre_ids.map((id) =>
                                genres.genres.find((genre) =>
                                    genre.id === id).name
                            )}
                        />
                    ))}
                </MoviesGrid>
                <Title>Crew</Title>
                <MoviesGrid>
                    {crews.map((crew) => (
                        <MovieTile
                            key={crew.id}
                            title={crew.title}
                            date={crew.release_date}
                            vote={crew.vote_average}
                            poster={crew.poster_path}
                            voteCount={crew.vote_count}
                            genres={crew.genre_ids.map((id) =>
                                genres.genres.find((genre) =>
                                    genre.id === id).name
                            )}
                        />
                    ))}
                </MoviesGrid>
            </Container>
        )
    } catch {
        return "";
    }
}

export default PersonPage;
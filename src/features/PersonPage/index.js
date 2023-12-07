import { useParams } from "react-router-dom";
import { usePopularPerson } from "./usePopularPerson";
import PersonTileDetalis from "./PersonTileDetalis";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

const PersonPage = () => {
    const { id } = useParams();
    const personId = id;

    const { popularPerson, loading, error } = usePopularPerson(personId);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    try {
        return(
            <PersonTileDetalis 
                key={popularPerson.id}
                poster={popularPerson.profile_path}
                name={popularPerson.name}
                birthDate={popularPerson.birthday}
                birthPlace={popularPerson.place_of_birth}
                description={popularPerson.biography}
            />
        )
    } catch {
        return "";
    }
}

export default PersonPage;
import { useApiPeopleList } from "./useApiPeopleList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

const PeopleList = () => {

    const {peopleList, loading, error} = useApiPeopleList()

    if(loading) {
        return <Loading />
    }
    
    if(error) { 
        return <Error />
    }
    
    try {
    
        const people = peopleList.results;
    
            return (
                <ul>
                    {people ? people.map((person) => (
                        <li key={person.id}>{person.name}</li>
                    )) : ""}
                </ul>
            );
        } catch {
        
        }

}

export default PeopleList;
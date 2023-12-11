import { useApiPeopleList } from "./useApiPeopleList";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import PersonTile from "../../common/PersonTile";
import { PeopleGrid } from "../../common/PersonTile/styled";
import { Container } from "../../common/Container";
import { Title } from "./styled";
import Pagination from "../../common/Pagiation";

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
                <Container>
                    <Title>Popular people</Title>
                    <PeopleGrid>
                        {people ? people.map((person) => (
                            <PersonTile 
                                key={person.id} 
                                id={person.id}
                                name={person.name}
                                poster={person.profile_path}
                            />
                        )) : ""}
                    </PeopleGrid>
                    <Pagination />
                </Container>
            );
        } catch {
        
        }

}

export default PeopleList;
import { StyledSearch, Input } from "./styled";
import { ReactComponent as Magnifier } from "./magnifier.svg";

const Search = () => (
    <StyledSearch>
        <Magnifier />
        <Input placeholder="Search for movies..."/>
    </StyledSearch>
)

export default Search;
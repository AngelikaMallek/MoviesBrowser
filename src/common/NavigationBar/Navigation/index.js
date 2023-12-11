import { ReactComponent as Icon } from "../../../images/navIcon.svg";
import { StyledNavigation, Title, Button, Links, LinkButton } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <Button>
            <Icon />
            <Title to="/movies">Movies Browser</Title>
        </Button>
        <Links>
            <LinkButton to="/movies">Movies</LinkButton>
            <LinkButton to="/people">People</LinkButton>
        </Links>
    </StyledNavigation>
)

export default Navigation;
import { ReactComponent as Icon } from "./icon.svg";
import { StyledNavigation, Title, Button, Links, LinkButton } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <Button>
            <Icon />
            <Title>Movies Browser</Title>
        </Button>
        <Links>
            <LinkButton>Movies</LinkButton>
            <LinkButton>People</LinkButton>
        </Links>
    </StyledNavigation>
)

export default Navigation;
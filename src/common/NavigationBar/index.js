import { StyledNavigationBar } from "./styled";
import Navigation from "./Navigation";
import Search from "./Search";

const NavigationBar = () => (
    <StyledNavigationBar>
        <Navigation />
        <Search />
    </StyledNavigationBar>
);

export default NavigationBar;
import { StyledNavigationBar } from "./styled";
import Navigation from "./Navigation";
import Search from "./Search";

const NavigatonBar = () => (
    <StyledNavigationBar>
        <Navigation />
        <Search />
    </StyledNavigationBar>
);

export default NavigatonBar;
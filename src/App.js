import NavigationBar from "./common/NavigationBar";
import { HashRouter, Switch, Route } from "react-router-dom";
import MovieList from "./features/MovieList";
import PeopleList from "./features/PeopleList";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people">
          <PeopleList />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

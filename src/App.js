import NavigationBar from "./common/NavigationBar";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "./features/MovieList";
import PeopleList from "./features/PeopleList";
import Movie from "./features/MoviePage";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/people">
          <PeopleList />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch >
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/league/:leagueId">
          <LeagueDetails></LeagueDetails>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

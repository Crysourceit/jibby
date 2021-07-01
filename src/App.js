import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron';
import PageNotFound from './components/Pages/PageNotFound';
import Tracking from './components/TrackingModule/Tracking';
import Register from "./components/Register/Register";
import Report from "./components/Report/Report";
import AccountApp from "./components/AccountApp/AccountApp";
function App() {
  return (

    <Router>
      {/* Always show */}
      <div className="root">
        <Navbar />
      </div>
      <Switch>

        <Route path="/" exact >
          <Jumbotron />
        </Route>

        <Route path="/track" exact>
          <Tracking />
        </Route>

        <Route path="/report" exact>
          <Report />
        </Route>

        <Route path="/account" exact>
          <AccountApp />
        </Route>

        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="*" exact component={PageNotFound} />

      </Switch>
    </Router>
  );
}

export default App;

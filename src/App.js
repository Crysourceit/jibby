import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron';
import PageNotFound from './components/Pages/PageNotFound';

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
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import PageNotFound from './components/Pages/PageNotFound';
import Tracking from './components/TrackingModule/Tracking';
import Register from "./components/Register/Register";
import Report from "./components/Report/Report";
import AccountApp from "./components/AccountApp/AccountApp";
import MiniNav from "./components/MiniNav/MiniNav";
import Jjampong from "./components/๋่Jjampong/Jjampong";
import Jibby from "./components/Jibby/Jibby";
import ButtomNav from "./components/ButtomNav/ButtomNav";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1500,
})

function App() {
  return (
    <Router basename="/jibby">
      {/* Always show */}
      <div className="root">
        <MiniNav />
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact >
          <Jibby />
          <div data-aos="fade-up" style={{ textAlign: 'center' }}>
            <Jjampong />
          </div>
          <ButtomNav />
        </Route>
        <Route path="/track" exact render={(props) => <Tracking {...props} />}>
          {/* <Tracking /> */}
        </Route>

        <Route path="/track/:jibbyTag" exact>
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

import logo from './logo.svg';

// Styling
import './App.css';

// Components - Pages
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
// import SplashObject from "./components/SplashObject.js";

// Project Pages
import ProjectKST from "./components/ProjectKST.js";

// Components - Objects
// import ProjectCard from "./components/ProjectCard.js";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={() => <Home/>} />
          <Route path={process.env.PUBLIC_URL + '/resume'} exact component={() => <Resume/>} />
          <Route path={process.env.PUBLIC_URL + '/project-kst'} exact component={() => <ProjectKST/>} />
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

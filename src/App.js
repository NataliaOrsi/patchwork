import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Order from "./Order";
import Contact from "./Contact";
import NotFoundPage from "./NotFoundPage";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/order" exact component={Order} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/notfoundpage" exact component={NotFoundPage} />
          <Redirect to="/NotFoundPage" />
        </Switch>
        <footer>
          <small>
            This website was coded by Natalia de Mesquita Orsi Vieira and is
            open-sourced in GitHub
          </small>
        </footer>
      </div>
    </Router>
  );
}

export default App;

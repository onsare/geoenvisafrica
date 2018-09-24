import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Contact from "./components/ContactPage";

import { Route, Switch } from "react-router-dom";
import About from "./components/AboutPage";
import Team from "./components/TeamPage/Team";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/ServicesPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/team" component={Team} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

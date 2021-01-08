import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main.js';
import NewAgeDrinks from './components/NewAgeDrinks';
import Footer from './components/Footer'
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Main/>}/>
          <Route path="/NewAgeDrinks" exact component={() => <NewAgeDrinks/>}/>
        </Switch>
        <Footer/>
        <BackToTop/>
      </Router>
    </div>
  );
}

export default App;

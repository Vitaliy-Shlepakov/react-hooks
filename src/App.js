import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

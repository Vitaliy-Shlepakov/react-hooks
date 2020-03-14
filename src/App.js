import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Alert from "./components/Alert/Alert";
import AlertState from "./context/alert/alertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar/>

        <div className="container">
          <Alert alert={{text: 'TEST TEST '}}/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;

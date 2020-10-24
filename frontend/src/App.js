import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LandingPage from './my_components/landing';
//import Sidebar from './my_components/sidebar';
//import Home from './home';
//import RestaurantDashboard from './restaurants';
//import Products from './products';
//import Categories from './categories';
//import Profile from './profile';
//import Reports from './reports';
import Login from './login';
import Registry from './registry';
import Welcome from './my_components/welcome';

function App() {
  return (
      <div className="container-fluid">
        <Router>
        

         <LandingPage/>
         <Switch>
         <Route exact path="/welcome" component={Welcome}/>
         <Route path="/login" component={Login}/>
         <Route path="/registry" component={Registry}/>
         </Switch>
         </Router>

    </div>
  );
}

export default App;


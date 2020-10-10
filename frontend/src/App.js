import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Sidebar from './my_components/sidebar';
import Home from './home';
import RestaurantDashboard from './restaurants';
import Products from './products';
import Categories from './categories';
import Profile from './profile';

function App() {
  return (
      <div class="wrapper d-flex align-items-stretch">
        <Router>
        <Sidebar />
         
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/restaurants" component={RestaurantDashboard} />
            <Route path="/products" component={Products} />
            <Route path="/categories" component={Categories}/>
         </Switch>
         </Router>
    </div>
  );
}

export default App;


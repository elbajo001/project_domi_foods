import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './stylebar.css';
import Sidebar from './my_components/sidebar';
import Home from './home';
import RestaurantDashboard from './restaurants';
import Products from './products';
import Categories from './categories';
import Profile from './profile';
import Reports from './reports';

function App() {
  return (
      <div className="wrapper d-flex align-items-stretch">
        <Router>
        <Sidebar />
         
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/restaurants" component={RestaurantDashboard} />
            <Route path="/products" component={Products} />
            <Route path="/categories" component={Categories}/>
            <Route path="/reports" component={Reports}/>
         </Switch>
         </Router>
    </div>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import LandingPage from './my_components/landing';
import Admin from './admin';
import Login from './login';
import Registry from './registry';
import Welcome from './my_components/welcome';
import Step2 from './user_restaurant';
import Registry_Admin from './user_admin_registry';

function App() {
  return (
      <div className="bg-transparent">
        <Router>
         <LandingPage/>
         <Switch>
            <Route exact path="/welcome" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/registry" component={Registry}/>
            <Route path="/admin/:id" component={Admin}/>
            <Route path="/user_restaurant/:id" component={Step2}/>
            <Route path="/user_admin_registry/:id" component={Registry_Admin}/>
         </Switch>
         </Router>

    </div>
  );
}

export default App;


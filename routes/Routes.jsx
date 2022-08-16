import React from 'react';
// import { Router, Scene  } from 'react-native-router-flux';
import GetStarted from '../screens/getstarted/GetStarted';
import JoinUs from '../screens/getstarted/JoinUs';
import {  Switch, Route } from "react-router-native";
import Navigation from '../components/navigation';

const Routes = () => (
    <Switch>
          <Route exact path="/" component={GetStarted}/>
          <Route exact path="/joinUs" component={JoinUs} />
          <Route exact path="/home" component={Navigation} />
    </Switch>
 )
 export default Routes
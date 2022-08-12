import React from 'react';
// import { Router, Scene  } from 'react-native-router-flux';
import GetStarted from '../screens/getstarted/GetStarted';
import JoinUs from '../screens/getstarted/JoinUs';
import { NativeRouter, Switch, Route } from "react-router-native";

const Routes = () => (
    <Switch>
          <Route exact path="/" component={GetStarted}/>
          <Route exact path="/joinUs" component={JoinUs} />
    </Switch>
 )
 export default Routes
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

//Importando telas
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Atendimentos from '../Pages/Atendimentos';
import Ocorrencias from '../Pages/Ocorrencias';

const RouterNavigation = (props) =>{

  return(
    <Router>
      <Switch>
        <Route exact authenticated={props.authenticated} path="/login" component={Login}/>
        <ProtectedRoute exact authenticated={props.authenticated} path="/" component={Dashboard}/>
        <ProtectedRoute exact authenticated={props.authenticated} path="/atendimentos" component={Atendimentos}/>
        <ProtectedRoute exact authenticated={props.authenticated} path="/ocorrencias" component={Ocorrencias}/>
      </Switch>
       
    </Router>
  );

}

export default RouterNavigation;
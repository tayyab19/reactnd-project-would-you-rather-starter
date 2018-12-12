import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Login} from './components/login';
import {Home} from './components/home';

export default (
	<Switch>
		<Route exact path="/" render={() => <Redirect to='/login'/>}/>
		<Route exact path="/login" component={Login}/>
		<Route exact path="/home" component={Home}/>
	</Switch>
);
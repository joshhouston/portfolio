import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';

export default (
    <Switch>
        <Route path='/' component={Landing}/>
        <Route path='/projects' component={Projects} />
    </Switch>
)
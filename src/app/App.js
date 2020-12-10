import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddQuestion from '../scenes/AddQuestion';
import EditQuestion from '../scenes/EditQuestion';
import Home from '../scenes/Home';
import './App.css';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/ajoutQuestion' component={AddQuestion} />
        <Route exact path='/editQuestion/:id' component={EditQuestion} />
      </Switch>
    </div>
  );
}

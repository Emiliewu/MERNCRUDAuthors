import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/update';
import './App.css';

export default function App() {
  return (
    <>
      <h2>Favorite Authors</h2>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/new">
          <Create />
        </Route>
        <Route exact path="/:id/edit">
          <Update />
        </Route>
      </Switch>
    </>
  );
};

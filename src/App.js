import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';
import ListOfCoins from './ListOfCoins';
import CoinDetails from './CoinDetails';
import Login from './Login';
import AdminSearch from './AdminSearch';
import AdminAdd from './AdminAdd';

class App extends Component {
  render() {
    return <div>
      <Route path="/" exact >
        <Homepage />
      </Route>
      <Route path="/list" exact >
        <ListOfCoins/>
      </Route>
      <Route path="/coin" exact >
        <CoinDetails/>
      </Route>
      <Route path="/login" exact >
        <Login/>
      </Route>
      <Route path="/admin-search" exact >
        <AdminSearch/>
      </Route>
      <Route path="/admin-add" exact >
        <AdminAdd/>
      </Route>
    </div>
  }
}

export default App;

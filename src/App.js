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
      <Route path="/" exact component={Homepage}/>
      <Route path="/list/:id" exact component={ListOfCoins} />
      <Route path="/coin/:id" exact component={CoinDetails} />
      <Route path="/login" exact component={Login} />
      <Route path="/admin-search" exact component={AdminSearch} />
      <Route path="/admin-add" exact component={AdminAdd}/>
    </div>
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';
import ListOfCoins from './ListOfCoins';

class App extends Component {
  render() {
    return <div>
      <Route path="/" exact >
        <Homepage />
      </Route>
      <Route path="/list" exact >
        <ListOfCoins/>
      </Route>
    </div>
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainSearch from './MainSearch';
import HomePageCoin from "./HomePageCoin";

const CoinsContainer=styled.div`
  display: flex;
  justify-content: space-between;
`;

class Homepage extends Component {
  render() {
    return <div className="container">
      <Header title="Homepage" />
      <MainSearch />
      <CoinsContainer>
        <HomePageCoin title="Bullion coins" src="https://i.postimg.cc/gcBVSZpX/South-Vietnamese-Dong-1.png" />
        <HomePageCoin title="Exclusive coins" src="https://i.postimg.cc/7ZJmMNTZ/ISK-2.png" onClick={this.clickHandler}/>
        <HomePageCoin title="Commemorative coins" src="https://i.postimg.cc/VvNFS981/Looney-1.png" onClick={this.clickHandler}/>
      </CoinsContainer>
    </div>
  }
}

export default Homepage;

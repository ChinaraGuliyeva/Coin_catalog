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
        <HomePageCoin title="Billion coins" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" />
        <HomePageCoin title="Billion coins" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" />
        <HomePageCoin title="Billion coins" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" />
      </CoinsContainer>
    </div>
  }
}

export default Homepage;

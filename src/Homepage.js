import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainSearch from './MainSearch';
import HomePageCoin from "./HomePageCoin";
import { Link } from 'react-router-dom';

const CoinsContainer=styled.div`
  display: flex;
  justify-content: space-between;
`;

class Homepage extends Component {
//would be better to do this with map
  clickHandler = (event) =>{
    console.log(event.target.innerHTML)
}
  render() {
    return <div className="container">
      <Header title="Homepage" />
      <MainSearch />
      <CoinsContainer>
      <Link to="/list/:id" className="coin-title" onClick={this.clickHandler}>
        <HomePageCoin title="Bullion coins" src="https://i.postimg.cc/gcBVSZpX/South-Vietnamese-Dong-1.png" />
      </Link>
      <Link to="/list/:id" className="coin-title" onClick={this.clickHandler}>
        <HomePageCoin title="Exclusive coins" src="https://i.postimg.cc/7ZJmMNTZ/ISK-2.png" />
      </ Link>
      <Link to="/list/:id" className="coin-title" onClick={this.clickHandler}>
        <HomePageCoin title="Commemorative coins" src="https://i.postimg.cc/VvNFS981/Looney-1.png"/>
      </Link>
      </CoinsContainer>
    </div>
  }
}

export default Homepage;

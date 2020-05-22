import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainSearch from './MainSearch';
import HomePageCoin from "./HomePageCoin";
import { Link } from 'react-router-dom';

const CoinsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Homepage extends Component {
  state = {
    coins: [
    {
      link: '/list/Bullion',
      title: 'Bullion coins',
      src: 'https://i.postimg.cc/gcBVSZpX/South-Vietnamese-Dong-1.png'
    },
    {
    link: '/list/Exclusive',
      title: 'Exclusive coins',
      src: 'https://i.postimg.cc/7ZJmMNTZ/ISK-2.png'
    },
    {
      link: '/list/Commemorative',
      title: 'Commemorative coins',
      src: 'https://i.postimg.cc/VvNFS981/Looney-1.png'
    }
  ]
}

render() {
  const { coins } = this.state;
  return <div className="container">
    <Header title="Homepage" />
    <MainSearch />
    <CoinsContainer>
      {coins.map(element => {return <Link to={element.link} className="coin-title"><HomePageCoin title={element.title} src={element.src} /></Link>})}
    </CoinsContainer>
  </div>
}
}

export default Homepage;

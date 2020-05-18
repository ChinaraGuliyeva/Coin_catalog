import React, { Component } from 'react';
import styled from 'styled-components';

const Coin = styled.img`
    display: block;
    width: 214px;
    height: 214px;
`;

class HomePageCoin extends Component {
    render() {
        return <div>
                    <h1>{this.props.title}</h1>
                    <a href="#">Show all ></a>
                    <Coin src={this.props.src} />
            </div>
    }
}

export default HomePageCoin;
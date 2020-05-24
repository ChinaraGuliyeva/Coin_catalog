import React, { Component } from 'react';
import styled from 'styled-components';

const Coin = styled.img`
    display: block;
    width: 214px;
    height: 214px;
`;

const A = styled.a`
    display: inline-block;
    margin-bottom: 10px;
`;

class HomePageCoin extends Component {
//Replace a href with p
    render() {
        return <div>
                    <h1>{this.props.title}</h1>
                    <A href="#">Show all ></A>
                    <Coin src={this.props.src} alt="Монета"/>
            </div>
    }
}

export default HomePageCoin;
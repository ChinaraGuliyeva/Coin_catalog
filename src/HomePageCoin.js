import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    render() {
        return <div>
                    <Link to="/list" className="coin-title"><h1>{this.props.title}</h1></Link>
                    <A href="#">Show all ></A>
                    <Coin src={this.props.src} />
            </div>
    }
}

export default HomePageCoin;
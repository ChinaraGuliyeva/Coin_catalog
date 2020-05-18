import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Coin = styled.img`
    display: block;
    width: 120px;
    height: 120px;
    margin-right: 30px;
`;

const CoinContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const CoinTitle = styled.h1`
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    color: #833AE0;
`;

class ListOfCoinsCoin extends Component {
    render() {
        return <CoinContainer>
            <Coin src={this.props.src} />
            <div>
                <Link to="/list" className="coin-title"><CoinTitle>{this.props.title}</CoinTitle></Link>
                <p>{this.props.description}</p>
            </div>
        </CoinContainer>
    }
}

export default ListOfCoinsCoin;
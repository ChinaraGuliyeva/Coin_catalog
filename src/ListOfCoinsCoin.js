import React, { Component } from 'react';
import styled from 'styled-components';


const Coin = styled.img`
    display: block;
    width: 120px;
    height: 120px;
    margin-right: 30px;
`;

const CoinContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    width: 700px;
`;

const CoinTitle = styled.h1`
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    color: #833AE0;
`;

const Content =styled.p`
    width: 224px;
`;

class ListOfCoinsCoin extends Component {
    render() {
        return <CoinContainer>
            <Coin src={this.props.src} alt="Монета"/>
            <div>
                <CoinTitle>{this.props.title}</CoinTitle>
                <Content>{this.props.description}</Content>
            </div>
        </CoinContainer>
    }
}

export default ListOfCoinsCoin;
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainSearch from './MainSearch';
import ListOfCoinsCoin from './ListOfCoinsCoin';

const CoinsContainer=styled.div`
    display: flex;
`;

const Column=styled.div`
    margin-right: 500px;
`;

class ListOfCoins extends Component {
    render() {
        const id=this.props.match.params.id;
        console.log(id);

        return <div className="container">
            <Header title="List of the coins" />
            <MainSearch />
            <CoinsContainer>
                <Column>
                    <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                    <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                    <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                </Column>
                <div>
                    <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                    <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                    <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                </div>
            </CoinsContainer>
        </div>
    }
}

export default ListOfCoins;
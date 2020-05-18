import React, { Component } from 'react';

import Header from './Header';
import MainSearch from './MainSearch';
import ListOfCoinsCoin from  './ListOfCoinsCoin';

class ListOfCoins extends Component {
    render() {
        return <div className="container">
            <Header title="List of the coins" />
            <MainSearch />
            <div>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum"/>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum"/>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum"/>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum"/>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum"/>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum"/>
            </div>
        </div>
    }
}

export default ListOfCoins;
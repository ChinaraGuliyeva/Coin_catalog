import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainSearch from './MainSearch';
import ListOfCoinsCoin from './ListOfCoinsCoin';

const CoinsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class ListOfCoins extends Component {
    state = {
        coins: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(`Id is ${id}`);

        fetch('http://localhost:3001/coins')
            .then(res => res.json())
            .then(coinsData => {
                console.log(coinsData);
                let coins = coinsData.filter(element => {return element.Type==id});
                this.setState({ coins });
            });
    }
    render() {
        const { coins } = this.state;
        return <div className="container">
            <Header title="List of the coins" />
            <MainSearch />
            <CoinsContainer>
                {coins.map(element => {return <ListOfCoinsCoin title={element.Name} src={element.Img1} description={element.Par1} />})}
            </CoinsContainer>
        </div>
    }
}

export default ListOfCoins;
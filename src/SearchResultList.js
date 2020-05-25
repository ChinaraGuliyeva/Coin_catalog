import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainSearch from './MainSearch';
import ListOfCoinsCoin from './ListOfCoinsCoin';

const CoinsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class SearchResultList extends Component {
    state = {
        coins: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost:3001/coins')
            .then(res => res.json())
            .then(coinsData => {
                let coins = coinsData.filter(element => {return element.Type==id});
                this.setState({ coins });
            });
    }
//Find where a in title is coming from
    render() {
        const { coins } = this.state;
        return <div className="container">
            <Header title="List of the coins" />
            <MainSearch />
            <CoinsContainer>
                Search result
            </CoinsContainer>
        </div>
    }
}

export default SearchResultList;
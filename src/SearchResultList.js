import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
                let coins = coinsData.filter(element => {
                    let name = element.Name.toLowerCase();
                    let result = id.toLowerCase();
                    return name.indexOf(result)!= -1
                });
                this.setState({ coins });
                console.log(this.state.coins)
            });
    }
    render() {
        const { coins } = this.state;
        return <div className="container">
            <Header title="List of the coins" />
            <MainSearch />
            <CoinsContainer>
                {coins.map(element => {return <Link to={`/coin/${element.id}`} className="coin-title"><ListOfCoinsCoin title={element.Name} src={element.Img2} description={element.Par1} /></Link>})}
            </CoinsContainer>
        </div>
    }
}

export default SearchResultList;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 40%;
    margin: 49px auto;
`;

const Coin = styled.img`
    display: block;
    width: 300px;
    height: 300px;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 452px;
    background-color: rgba(196, 196, 196, 0.5);
    padding: 43px;

`;

const Title = styled.h1`
    font-size: 28px;
    padding: 0;
    margin: 0;
`;

class CoinDetails extends Component {
    state = {
        coin: ''
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('http://localhost:3001/coins')
            .then(res => res.json())
            .then(coinsData => {
                let coin = coinsData.find(element => { return element.id == id });
                this.setState({ coin: coin })
                console.log(this.state.coin);
            });
    }
    render() {
        const { coin } = this.state;
        return <Container>
            <div>
                <Coin src={coin.Img2} alt="Монета" />
                <Coin src={coin.Img1} alt="Монета" />
            </div>
            <DescriptionContainer>
                <div>
                    <Title>{coin.Name}</Title>
                    <p>{coin.Par1}</p>
                    <p>{coin.Par2}</p>
                    <p>{coin.Par3}</p>
                    <p>{coin.Par4}</p>
                    <p>{coin.Par5}</p>
                    <p>{coin.Par6}</p>
                    <p>{coin.Par7}</p>
                    <p>{coin.Par8}</p>
                    <p>{coin.Par9}</p>
                    <p>{coin.Par10}</p>
                </div>
                <Link to="/list">Back to the list</Link>
            </DescriptionContainer>
        </Container>
    }
}

export default CoinDetails;
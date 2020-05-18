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
    render() {
        return <Container>
            <div>
                <Coin alt="Монета" />
                <Coin alt="Монета" />
            </div>
            <DescriptionContainer>
                <div>
                    <Title>Title</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Link to="/list">Back to the list</Link>
            </DescriptionContainer>
        </Container>
    }
}

export default CoinDetails;
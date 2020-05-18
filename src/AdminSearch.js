import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import MainSearch from './MainSearch';
import ListOfCoinsCoin from './ListOfCoinsCoin';

const Container = styled.div`
    display: flex;
`;

const Button = styled.button`
    background-color: #E5E5E5;
    margin: 0 30px;
    color: black;
`;

const AddCoin = styled.div`
    width: 120px;
    height: 120px;
    border: 1px solid #000000;
    border-radius: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 120px;
`;

const AddText = styled.a`
    line-height: 120px;
    text-decoration: underline;
    margin: 0 30px;
`;

class AdminSearch extends Component {
    render() {
        return <div className="container">
            <Header title="Admin Panel" />
            <MainSearch />
            <Container>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                <Button><Link className="edit" to="/admin-add">Edit</Link></Button> <Button>Delete</Button>
            </Container>
            <Container>
                <ListOfCoinsCoin title="Title" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Russian_Empire-1899-Coin-5-Obverse.jpg" description="Lorem ipsum" />
                <Button><Link className="edit" to="/admin-add">Edit</Link></Button> <Button>Delete</Button>
            </Container>
            <Container>
                <AddCoin><Link className="edit" to="/admin-add">+</Link></AddCoin>
                <AddText><Link className="edit" to="/admin-add">Add a new coin</Link></AddText>
            </Container>
        </div>
    }
}

export default AdminSearch;
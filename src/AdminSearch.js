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
    state = {
        coins: [],
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost:3001/coins')
            .then(res => res.json())
            .then(coins => {
                this.setState({ coins });
            });
    }
    render() {
        const { coins } = this.state;
        return <div className="container">
            <Header title="Admin Panel" />
            <MainSearch />
            {coins.map(element => {return <Container><ListOfCoinsCoin title={element.Name} src={element.Img1} description={element.Par1}/>
                <Link className="edit" to="/admin-add"><Button>Edit</Button></Link> <Button>Delete</Button>
                </Container>})}
        </div>
    }
}

export default AdminSearch;
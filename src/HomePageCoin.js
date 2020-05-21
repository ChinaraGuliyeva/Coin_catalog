import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Coin = styled.img`
    display: block;
    width: 214px;
    height: 214px;
`;

const A = styled.a`
    display: inline-block;
    margin-bottom: 10px;
`;

class HomePageCoin extends Component {
    clickHandler = (event) =>{
        console.log(event.target.innerHTML)      }
    render() {
        return <div>
                    <Link to="/list/:id" className="coin-title" onClick={this.clickHandler}><h1>{this.props.title}</h1></Link>
                    <A href="#">Show all ></A>
                    <Coin src={this.props.src} alt="Монета"/>
            </div>
    }
}

export default HomePageCoin;
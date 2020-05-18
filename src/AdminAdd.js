import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';

const ColumnsContainer=styled.div`
    display: flex;
`;

const Column=styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    display: block;
    margin-top: 20px;
`;

class AdminAdd extends Component{
    render(){
        return<div className="container">
            <Header title="Admin Panel" />
            <ColumnsContainer>
                <Column>
                    <Label for="coin-name">Coin name</Label>
                    <input id="coin-name"/>
                    <Label for="face-value">Face value</Label>
                    <input id="face-value"/>
                    <Label for="year-of-issue">Year of issue</Label>
                    <input id="year-of-issue"/>
                    <Label for="price">Price</Label>
                    <input id="price"/>
                    <Label for="country">Country</Label>
                    <input id="country"/>
                    <Label for="metal">Metal</Label>
                    <input id="metal"/>
                </Column>
                <Column>
                    <Label for="coin-name">Coin name</Label>
                    <input id="coin-name"/>
                    <Label for="face-value">Face value</Label>
                    <input id="face-value"/>
                    <Label for="year-of-issue">Year of issue</Label>
                    <input id="year-of-issue"/>
                    <Label for="price">Price</Label>
                    <input id="price"/>
                </Column>
                <Column>
                    <Label for="obverse">Link to obverse image</Label>
                    <input id="obverse"/>
                    <Label for="reverse">Link to reverse image</Label>
                    <input id="reverse"/>
                    <div>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </Column>
            </ColumnsContainer>
        </div>
    }
}

export default AdminAdd;
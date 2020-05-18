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

const LastColumn=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Label = styled.label`
    display: block;
    margin-top: 20px;
`;

const ButtonContainer=styled.div`
    margin: 0 auto;
`;

const SecondButton=styled.button`
    background-color: #E1E1E1;
    color: black;
    margin-left: 40px;
`;

const BigInput=styled.input`
    height: 128px;
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
                    <Label for="short">Short description</Label>
                    <BigInput id="short"/>
                    <Label for="long">Long description</Label>
                    <BigInput id="long"/>
                    <Label for="quality">Quality of the coin</Label>
                    <input id="quality"/>
                    <Label for="weight">Weight</Label>
                    <input id="weight"/>
                </Column>
                <LastColumn>
                <div>
                    <Label for="obverse">Link to obverse image</Label>
                    <input id="obverse"/>
                    <Label for="reverse">Link to reverse image</Label>
                    <input id="reverse"/>
                </div>
                <ButtonContainer>
                    <button>Save</button>
                    <SecondButton>Cancel</SecondButton>
                </ButtonContainer>
                </LastColumn>
            </ColumnsContainer>
        </div>
    }
}

export default AdminAdd;
import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    padding: 20px 0;
`;

const Label = styled.label`
    display: inline-block;
    font-weight: bold;
    margin-bottom: 5px;
`;

class MainSearch extends Component {
    render() {
        return <ContainerDiv>
            <Label HTMLfor='search-input'>Input field</Label>
            <div>
                <input id='search-input' />
                <button>Search</button>
            </div>
            <p><a href="#">Advanced filter</a> ˅</p>
        </ContainerDiv>
    }
}

export default MainSearch;
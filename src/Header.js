import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Heading = styled.h1`
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 40px;
`;

class Header extends Component {
    render() {
        return <HeaderDiv>
            <Heading>{this.props.title}</Heading>
            <Link className='header-link' to='/login'>Admin panel</Link>
        </ HeaderDiv>
    }
}

export default Header;
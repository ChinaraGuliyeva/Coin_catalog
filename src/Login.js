import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';

const Form=styled.form`
    width: 400px;
    margin: 200px auto;
`;

const Label = styled.label`
    display: inline-block;
    margin: 20px 0 10px;
`;

const Button = styled.button`
    display: block;
    margin: 30px auto;
`;

class Login extends Component {
    render() {
        return <div className="container">
            <Header title="Admin panel" />
            <Form>
                <Label htmlFor="login">Login</Label>
                <input id="login" />
                <Label htmlFor="password">Password</Label>
                <input id="password" />
                <Button><Link className='admin-search-link' to="/admin-search">Sign in</Link></Button>
            </Form>
        </div>
    }
}

export default Login;
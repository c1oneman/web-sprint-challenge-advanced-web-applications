import React, { Component } from 'react';
import styled from 'styled-components';
import { login } from '../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const TypeForm = styled.input`
   
`;

const LoginForm = styled.form``;

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = e =>{
        console.log(this.state);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginSubmit = e =>{
        e.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.login(credentials);
    }

    render(){

        console.log(this.props);
        return(

            <div className='loginContainer'>
                <LoginForm onSubmit={(e) => this.loginSubmit(e)}>
                    <TypeForm 
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <TypeForm 
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChanges}
                    />
                    <input type="submit" />
                </LoginForm>
                {localStorage.getItem('token') && <Redirect to="/bubbles" />}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login })(Login);
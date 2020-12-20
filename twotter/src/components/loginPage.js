import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import component from './component.css';
import { login } from './../services/login';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);


    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        
        if(!this.state.email) {
            return this.setState({ error: 'Username is required' });
        }

        if(!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        var userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        this.Login(userInfo);
        return this.setState({ error: '' });
    }

    HideModal = () => {
        this.props.handleClose();
    }

    Login = (e) => {
        login(e)
        .then(response => {
            localStorage.setItem('token', response.token);
            console.log("TOKEN", response.token);
            this.onLogin();
            this.HideModal();
        })
    }

    handleUserChange(evt) {
        this.setState({
            email: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    onLogin(){
        this.props.loginHandler();
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="container">
                    {
                        this.state.error &&
                        <h3 onClick={this.dismissError}>
                            <Button onClick={this.dismissError}>X</Button>
                            {this.state.error}
                        </h3>
                    }
                    <div className="row">
                        <div className="col-25">
                            <Form.Label className="usernameLabel">Email</Form.Label>
                        </div>
                        <div className="col-75">
                            <Form.Control className="username" type="email" value={this.state.email} onChange={this.handleUserChange} />
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-25">
                            <Form.Label className="passwordLabel">Password</Form.Label>
                        </div>
                        <div className="col-75">
                            <Form.Control className="password" type="password" value={this.state.password} onChange={this.handlePassChange}></Form.Control>
                        </div>   
                    </div>                  
                    <Form.Control className="submit" type="submit" value="Log In"></Form.Control>
                </Form>
            </div>
        );
    }
}

export default LoginPage;
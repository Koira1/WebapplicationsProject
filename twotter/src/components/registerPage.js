import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { register } from './../services/register';

import component from './component.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);

    }

    dismissError() {
        this.setState({ error: '' });
    }
    

    handleSubmit(evt) {
        evt.preventDefault();
        
        if(!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if(!this.state.email) {
            return this.setState({ error: 'Email is required'});
        }

        if(!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        var userInfo = {
            email: this.state.email,
            displayName: this.state.username,
            password: this.state.password
        }

        this.Register(userInfo);
        return this.setState({ error: '' });
    }

    HideModal = () => {
        this.props.handleClose();
    }

    Register = (e) => {
        register(e)
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.token);
            this.HideModal();
        })
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    handleEmailChange(evt) {
        this.setState({
            email: evt.target.value,
        })
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
                            <Form.Label>Email</Form.Label>
                        </div>
                        <div className="col-75">
                            <Form.Control className="email" type="email" value={this.state.email} onChange={this.handleEmailChange}></Form.Control>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <Form.Label className="usernameLabel">Display name</Form.Label>
                        </div>
                        <div className="col-75">
                            <Form.Control className="username" type="text" value={this.state.username} onChange={this.handleUserChange} />
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
                    <Form.Control className="submit" type="submit" value="Register"></Form.Control>
                </Form>
            </div>
        );
    }
}

export default RegisterPage;
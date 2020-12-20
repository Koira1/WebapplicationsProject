import React, { Component, useState } from 'react';
import  LoginPage  from './loginPage';
import component from './component.css';
import { Button } from 'react-bootstrap';
import { logout } from './../services/logOut';

export class OpenLoginModal extends Component {
    constructor(props) {
        super(props);
        console.log("Props", this.props);
        this.state = {
            show: false
        };
    }

    showModal = () => {
        this.setState( { show: true });
    }

    hideModal = () => {
        this.setState( { show: false });
    }

    logOut = () => {
        localStorage.removeItem('token');
        logout()
        .then(response => {
            console.log(response);
            this.loginHandler();
        }
        )
    }

    loginHandler = () => {
        this.props.loginHandler();
    }

    render() {
        let button;
        console.log("isLoggedIn", this.props.isLoggedIn);
        if(this.props.isLoggedIn){
            button = <Button variant="outline-info" onClick={this.logOut}>Log out</Button>
        } else {
            button = <Button variant="outline-info" onClick={this.showModal}>Log in</Button>
        }
        return (     
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal} loginHandler={this.props.loginHandler}>
                </Modal>
                {button}
            </div>
        )
    }
}

const Modal = ({ handleClose, show, loginHandler }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName}>
            <section>
                <LoginPage loginHandler={loginHandler} handleClose={handleClose}></LoginPage>
                <Button onClick={handleClose} className="close">X</Button>
            </section>
        </div>
        
    );
};
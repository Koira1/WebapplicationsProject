import React, { Component, useState } from 'react';
import  RegisterPage  from './registerPage';
import component from './component.css';
import { Button } from 'react-bootstrap';

export class OpenRegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleChangeValue = e => this.setState({show: e.target.value});

    showModal = () => {
        this.setState( { show: true });
        console.log(this.state.show);
    }

    hideModal = () => {
        this.setState( { show: false });
    }

    render() {
        let button;
        if(this.props.isLoggedIn){
            return false;
        } else {
            button = <Button variant="outline-info" onClick={this.showModal}>Register</Button>
        }
        return (     
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal} hideModal={this.hideModal}>
                </Modal>
                {button}
            </div>
        )
    }
}

const Modal = ({ handleClose, show, hideModal }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    console.log(showHideClassName);

    return(
        <div className={showHideClassName}>
            <section>
                <RegisterPage show={show} handleClose={handleClose}></RegisterPage>
                <Button onClick={handleClose} className="close">X</Button>
            </section>
        </div>
        
    );
};
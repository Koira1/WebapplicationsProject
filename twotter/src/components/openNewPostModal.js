import React, { Component, useState } from 'react';
import AddPost from './newPostPage';
import component from './component.css';
import { Button } from 'react-bootstrap';

export class OpenNewPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

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
            button = <Button variant="outline-warning" onClick={this.showModal}>New post</Button>
        } else {
            return false;
        }
        return (     
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal} user={this.props.user} getPosts={this.props.getPosts}>
                </Modal>
                {button}
            </div>
        )
    }
}

const Modal = ({ handleClose, show, user, getPosts }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName}>
            <section>
                <AddPost displayName={user} handleClose={handleClose} getPosts={getPosts}></AddPost>
                <Button onClick={handleClose} className="close">X</Button>
            </section>
        </div>
        
    );
};
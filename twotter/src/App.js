import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import { Collapse, Container, Row, Col } from 'react-bootstrap';
import CreateUser from './components/createuser';
import Header from './components/Header';
import { getAllPosts } from './services/getPosts';
import { DisplayBoard } from './components/displayBoard';
import { createPost } from './services/newPost';
import { CreatePost } from './components/createPost';
import { OpenLoginModal } from './components/openLoginModal';
import { OpenNewPostModal } from './components/openNewPostModal';
import NavBarCustom from './components/navBar';
import RenderPosts from './components/renderPosts';
import { isAuthenticated } from './services/isAuthenticated';

console.log(localStorage.token);

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: '',
      isLoggedIn: false,
      posts: []
    }

    //this.IsAuthenticated = this.IsAuthenticated.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.getAllPostsHandler = this.getAllPostsHandler.bind(this);
  }
  
  

  componentDidMount(){
    console.log(localStorage.token);
    const token = localStorage.token;
    if(token){
      this.IsAuthenticated(localStorage.token);    
    } else {
      this.setState({
        user: "Not currently signed in",
        isLoggedIn: false,
        posts: []
      })
    }
    this.getallPosts();
  }

  loginHandler() {
    this.IsAuthenticated(localStorage.token);
  }

  getAllPostsHandler(){
    this.getallPosts();
  }

  IsAuthenticated = (e) => {
    if(e) {
      isAuthenticated(e)
    .then(response => {
      console.log(response);
        this.setState({
          user: response.user,
          isLoggedIn: true
        });
    })
    } else {
      this.setState({
        user: 'Not currently signed in',
        isLoggedIn: false
      })
    }
    
  }

  getallPosts = () => {
    getAllPosts()
    .then(posts => {
      this.setState({posts: posts})
    });
  }

  
//<CreatePost createPost={this.CreatePost}></CreatePost>
  render() {
    return(
      <div className="App-header">
        <NavBarCustom user={this.state.user} loginHandler={this.loginHandler} isLoggedIn={this.state.isLoggedIn} getPosts={this.getAllPostsHandler}></NavBarCustom>
        <Container>
          <Row>
              <RenderPosts posts={this.state.posts}></RenderPosts>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;

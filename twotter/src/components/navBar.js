import { Navbar, Form, Nav, FormControl, Button, Container } from 'react-bootstrap';
import { OpenLoginModal } from './openLoginModal';
import { OpenNewPostModal } from './openNewPostModal';
import { OpenRegisterModal } from './openRegisterModal';
const { Component } = require("react");



class NavBarCustom extends Component {
    constructor(props){
        super(props);
    }

    //<Button variant="outline-info" className="buttons">Login</Button>
    //<Button variant="outline-info" className="buttons">Register</Button>
    //<Button variant="outline-warning" className="buttons">New Post</Button>
    render(){
        return(
            <Navbar bg="dark" variant="dark" className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Twatter</Navbar.Brand>
                    <Nav className="mr-auto navbar-nav">
                        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                    </Nav>
                    <div>
                        <h3>{this.props.user}</h3>
                        <OpenLoginModal loginHandler={this.props.loginHandler} isLoggedIn={this.props.isLoggedIn}></OpenLoginModal>
                        <OpenNewPostModal user={this.props.user} isLoggedIn={this.props.isLoggedIn} getPosts={this.props.getPosts}></OpenNewPostModal>
                        <OpenRegisterModal isLoggedIn={this.props.isLoggedIn}></OpenRegisterModal>
                    </div>
                </Container>
            </Navbar>
        )
    }
}

export default NavBarCustom;
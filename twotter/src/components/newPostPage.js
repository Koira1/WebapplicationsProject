
import { createPost } from './../services/newPost';
import { Form, Button } from 'react-bootstrap';
import { component } from './component.css';
const { Component } = require("react");

class AddPost extends Component {

    constructor(){
        super();
        this.state={
            title: "",
            subject: "",
            error: "",
            displayName: "",
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.dismissError = this.dismissError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dismissError(){
        this.setState({ error: "" });
    }

    handleClose = () => {
        this.props.handleClose();
    }

    handleSubmit(evt){
        evt.preventDefault();

        if(!this.state.title){
            return this.setState({ error: "Title is required" });
        }
        if(!this.state.subject) {
            return this.setState({ error: "Subject is required" });
        }


        this.CreatePost();
        return this.setState({ error: "" });
    }

    handleTitleChange(evt) {
        this.setState({
            title: evt.target.value,
        });
    }

    handleSubjectChange(evt) {
        this.setState({
            subject: evt.target.value,
        });
    }

    CreatePost = (e) => {
        var postData = {
            title: this.state.title,
            subject: this.state.subject,
            user: this.props.displayName,
        }
        createPost(postData)
        .then(response => {
            this.handleClose();
            this.reloadPosts();
          console.log(response);
        })
      }

      reloadPosts = () => {
          this.props.getPosts();
      }

    render() {
        return(
        <div>
            <div className="form-are">
                <Form onSubmit={this.handleSubmit} className="container">
                    {
                        this.state.error &&
                        <h3 onClick={this.dismissError}>
                            <Button onClick={this.dismissError}>X</Button>
                            {this.state.error}
                        </h3>
                    }
                    <Form.Label>Logged in as: {this.props.displayName}</Form.Label>
                    <div className="row">
                        <div className="col-25">
                            <Form.Label>Title</Form.Label>
                        </div>
                        <div className="col-75">
                            <Form.Control type="text" placeholder="Enter title" value={this.state.title} onChange={this.handleTitleChange}></Form.Control>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <Form.Label>Subject</Form.Label>
                        </div>
                        <div className="col-75">
                            <Form.Control type="text" placeholder="Enter subject" value={this.state.subject} onChange={this.handleSubjectChange}></Form.Control>
                        </div>
                    </div>
                    <Form.Control className="submit" type="submit" value="Submit"></Form.Control>
                </Form>
            </div>
        </div>
    )}
}

export default AddPost;
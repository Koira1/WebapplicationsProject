import React, { Component } from 'react';
import { getAllPosts } from './../services/getPosts';

    function setDate(seconds){
        var t = new Date(1970, 0, 1);
        t.setSeconds(seconds);
        var dformat =[t.getMonth()+1,
            t.getDate(),
            t.getFullYear()].join('/')+' '+
           [t.getHours(),
            t.getMinutes(),
            t.getSeconds()].join(':');
        return dformat;
      }

class RenderPosts extends Component {
    constructor(props) {
        super(props);
    }
/*
    componentDidMount(){
        this.getallPosts();
        console.log("ComponentDidMount called.");
    }

    getallPosts = () => {
        getAllPosts()
        .then(posts => {
          this.setState({posts: posts})
        });
      }*/


//<p className="list-group-item-text">{post.subject}</p><h3 className="list-group-item-heading">{post.date}</h3>
      render(){
          return(
              <div className="list-group">
                  {
                      this.props.posts.map(function(post, index) {
                          return (
                          <a href="#" key={index} className="list-group-item active">
                            <h4 href="/profile{post.user}" className="list-group-item-heading">{post.user}</h4>
                            <h4>{post.title}</h4>
                            <h5 className="list-group-item-heading">{post.post}</h5>
                            <h5 className="list-group-item-heading">{setDate(post.date._seconds)}</h5>        
                            
                          </a>
                          )
                      })
                  }
              </div>
          )
      }
}

export default RenderPosts;
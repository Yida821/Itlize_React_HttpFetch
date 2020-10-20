import React, { Component } from 'react';

import './newpost.css';

import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

class NewPost extends Component {
    state = {
        id : '',
        userId : '',
        title: '',
        body: '',
        author: 'Yichun'
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/posts');
        console.log( "New Post Did Mount", this.props );
    }

    postDataHandler = () => {
        const data = {
            id : this.state.id,
            userId : this.state.userId,
            title: this.state.title,
            body: this.state.content,
        };
        axios.post( '/posts', data )
            .then( response => {
                console.log( "Add function", response );
                // this.props.history.replace('/posts');
                // this.setState( { submitted: true } );
            } );
    }


    render() {
        return (
            <div className="NewPost">
          
            <h1>Add a Post</h1>
            <label>Id</label>
            <input types = "text" value={this.state.id} onChange={( event ) => this.setState( { id: event.target.value } )}></input>
            <label>UserId</label>
            <input types = "text" value={this.state.userId} onChange={( event ) => this.setState( { userId: event.target.value } )}></input>
            <label>Title</label>
            <input type="text" value={this.state.title} onChange={( event ) => this.setState( { title: event.target.value } )} />
            <label>Body</label>
            <textarea rows="4" value={this.state.body} onChange={( event ) => this.setState( { body: event.target.value } )} />
            <label>Author</label>
            <select >
                <option value="Yichun">Yichun</option>
                <option value="Manu">Manu</option>
            </select>
            <button onClick={this.postDataHandler}>Add Post</button>
        </div>
    );
        
    }

}

export default NewPost;
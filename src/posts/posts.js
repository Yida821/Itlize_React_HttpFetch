import React, { Component } from 'react';

import './posts.css';



import axios from 'axios';



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts : [],
          isLoaded : false,
        };
        }
    
    
        componentDidMount() {
          // axios.get( '/posts')
    
          axios.get( '/posts')
          .then( response => {
              console.log(response);
              // this.setState( { loadedPost: response.data } );
              this.setState ({
                      isLoaded : true,
                      posts : response.data
                    });
          } );
    
          //javascript way to get data
          // fetch('https://jsonplaceholder.typicode.com/posts')
          //   .then(response => response.json())
          //   .then(result => {
          //     //console.log(result)
          //     this.setState ({
          //       isLoaded : true,
          //       posts : result
          //     });
          //     // console.log(this.state.isLoaded)
          //     // console.log(this.state.posts)
          //   });
        }
    
        addNewRecord = () => {
          console.log("Add new records");
          const id = prompt("Type in id");
          const userId =  prompt("Type in user ID");
          const title = prompt("Type in title");
          const body = prompt("Type in Body")
          let newRecord = {
            id : id,
            userId : userId,
            title : title,
            body : body
          }
          //console.log(newRecord); 
          //console.log(this.state.posts) this.state is undefine because I forget about binding this 
          let posts = [...this.state.posts]
          posts.push(newRecord);
          //console.log(posts)
          this.setState({posts : posts})
        }
    
    
        deleteRecord = (id) =>{
          console.log(id)
          let posts1 = [...this.state.posts];
          let keptposts= posts1.filter(post => post.id !== id)
          console.log(keptposts.length);
    
          //console.log(this.state.posts);
          this.setState({posts : keptposts}); // it is posts : keptposts
          //console.log(this.state.posts);
        }
    
        // change = (event) => {
        //   console.log("in change function");
        //   let newvalue = event.target.value;
        //   console.log(newvalue);
        // }
    
    
    
        // updateRecord = (id) => {
        //   console.log("in update function", id)
    
        // }
    
        handleEnter = (event, id, column) => {
          if(event.key === 'Enter'){
            let postsCopy = [...this.state.posts]
            console.log(postsCopy)
            // find the object with id
            let post = postsCopy.filter(post => post.id === id)
            console.log(post) // the is a list
            
            let index = postsCopy.indexOf(post[0])
            console.log(index)   
            let value = event.target.value;
            // console.log(value)
            // console.log(column)
            post[0][column] = value
            console.log(post[0])
    
            postsCopy[index] = post[0];
            this.setState({posts : postsCopy})
          
          }
        }
    
        render() {
        let posts = this.state.posts
        //console.log("render function", posts)
        // console.log(this.state.isLoaded)
        const style = {
              width: '300px',
        }
        const style1 = {
          width: '60px',
        }
        const style2 = {
          width: '600px',
        }
          return (
            
          <>
             <button className = "buttonBlue" onClick = {this.addNewRecord}>Add a New Record</button>
            <table className="Table">
            <thead>
              <tr>
                <th className="">Id</th>
                <th className="">UserId</th>
                <th className="">Title</th>
                <th className="">Body</th>
                <th className="">Delete</th>
                {/* <th className="">Update</th> */}
              </tr>
            </thead>
            <tbody>
                  {posts.map((post, index) => (
                    <tr key = {post.id} >
                    <td>
                      <input onKeyDown={(event) => this.handleEnter(event, post.id, "id")} 
                      
                      style = {style1} 
                      defaultValue = {post.id} ></input>
                    </td>
                    <td>
                      <input 
                      onKeyDown={(event) => this.handleEnter(event, post.id, "userId")}
                     
                      style = {style1} 
                      defaultValue = {post.userId}></input>
                    </td>
                    <td>
                      <input 
                      onKeyDown={(event) => this.handleEnter(event, post.id, "title")}
                     
                      style = {style} 
                      defaultValue = {post.title}></input>
                    </td>
                    <td>
                      <input 
                      onKeyDown={(event) => this.handleEnter(event, post.id, "body")}
                      style = {style2} 
                      defaultValue = {post.body}></input>
                    </td>
                    <td><button onClick = {()=>this.deleteRecord(post.id)} className = "buttonRed"> Delete</button></td>
                    {/* <td><button onClick = {()=> this.updateRecord(post.id)} className = "buttonGreen"> Update</button></td> */}
                    </tr>
                  ))}
            </tbody>
            </table>
         
    </>
        
          )
        
        
        }
    
    
    
}
  

export default Posts;
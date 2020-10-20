import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from '../newpost/newpost';
import Posts from '../posts/posts'

import './nav.css';
// import Posts from './Posts/Posts';
// import asyncComponent from '../../hoc/asyncComponent';
// // import NewPost from './NewPost/NewPost';

class Nav extends Component {
    render () {
        return (
            <div className="Nav">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* <Route path="/new-post" component={AsyncNewPost} /> */}
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route render={() => <h1>Welcome!</h1>}/>
                     {/*<Redirect from="/" to="/posts" />*/}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
             </div>
        )
    }
}

export default Nav;
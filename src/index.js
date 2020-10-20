import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

//set the global variables
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN Yichun';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//interceptor 
axios.interceptors.request.use(request => {
  console.log("This is log of request in interceptor ", request);
  console.log("in the interceptor : request")
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

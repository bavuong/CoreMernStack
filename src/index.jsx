// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
// import AddItem from './components/AddItem';
// import Hello from './Hello';

import main from './app/main'
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';
import index from './home/index';
import view from './components/view'
ReactDOM.render(
  <Router >
      <div>
     
        <Route exact path='/' component={main} />
        <Route path='#/add-item' component={AddItem} />
        
        <Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />
        <Route path='/view' component={view} />
      </div>
  </Router>,
 
  document.getElementById('root')
);

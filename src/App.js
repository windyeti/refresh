import React from 'react';
// import { Link, Router, Route } from 'react-router';

import { createStore } from 'redux';

import Dropdown from 'containers/dropdown';
import Header from 'containers/header';
import RegistrationForm from 'containers/registrationForm';

import './App.css'

function reducerPlaylist(state = [], action) {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state, action.payload
        ]
    }
}

const store = createStore(reducerPlaylist);

store.subscribe(() => {
    console.log('store', store.getState());
});

store.dispatch({ type : 'ADD_TRACK', payload : 'Jora song'});

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Dropdown />
        <RegistrationForm />
      </div>
    )
  }
}

export default App;

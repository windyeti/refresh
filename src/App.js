import React from 'react';
// import { Link, Router, Route } from 'react-router';

import { createStore } from 'redux';

import Dropdown from 'containers/dropdown';
import Header from 'containers/header';
import RegistrationForm from 'containers/registrationForm';

import './App.css'

const inputTrack = document.querySelectorAll('.input-track')[0];
const btnSubmit = document.querySelectorAll('.submit-track')[0];
const list = document.querySelectorAll('.list-track')[0];

function reducerPlaylist(state = [], action) {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state, action.payload
        ]
    }
}

const store = createStore(reducerPlaylist);

store.subscribe(() => {
    list.innerHTML = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    })
});

btnSubmit.addEventListener('click', () => {
    const track = inputTrack.value;
    inputTrack.value = '';
    store.dispatch({ type : 'ADD_TRACK', payload : track});
});




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

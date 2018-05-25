import React from 'react';
import { connect } from 'react-redux';

// import { Link, Router, Route } from 'react-router';

import Dropdown from 'containers/dropdown';
import Header from 'containers/header';
import RegistrationForm from 'containers/registrationForm';

import './App.css';
import tracks from "reducers/tracks";

class App extends React.Component {
  addTrackToList() {
    this.props.addTrack(this.input.value);
    this.input.value = '';
  }
  render() {
    return (
      <div className='container'>
        <input
          type="text"
          ref={(input) => this.input = input}
        />
          <button
            onClick={this.addTrackToList.bind(this)}
          >
            Принять
          </button>
          <ul>
            {this.props.tracks.map((track, key) => {
              return (
                <li key={key}>
                  {track}
                </li>
              )
            })}
          </ul>
        <Header />
        <Dropdown />
        <RegistrationForm />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  tracks : state.tracks
});
const mapDispatchToProps = (dispatch) => ({
  addTrack : (track) => dispatch({
    type : 'ADD_TRACK',
    payload : track
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

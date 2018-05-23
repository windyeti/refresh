import React from 'react';
import Dropdown from 'containers/dropdown';
import Header from 'containers/header';
import RegistrationForm from 'containers/registrationForm';

import './App.css'

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

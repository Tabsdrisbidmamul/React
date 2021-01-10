import React, { Component } from 'react';

import './App.css';

import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Layfon',
  };

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput
          changed={this.usernameChangeHandler}
          username={this.state.username}
        ></UserOutput>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    string: '',
    length: 0,
  };

  changeUserInputLength = (event) => {
    this.setState({
      length: event.target.value.length,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changeUserInputLength}
        />
        <p>{this.state.length}</p>
      </div>
    );
  }
}

export default App;

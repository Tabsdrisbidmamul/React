import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    string: '',
  };

  changeUserInputLength = (event) => {
    this.setState({
      string: event.target.value,
    });
  };

  deleteCharHandler = (index) => {
    const stringCopy = this.state.string.split('');
    stringCopy.splice(index, 1);

    this.setState({
      string: stringCopy.join(''),
    });
  };

  render() {
    const charList = this.state.string.split('').map((ch, index) => {
      return (
        <CharComponent
          key={index}
          char={ch}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          onChange={this.changeUserInputLength}
          value={this.state.string}
        />
        <p>{this.state.length}</p>
        <ValidationComponent textLength={this.state.string.length} />
        {charList}
      </div>
    );
  }
}

export default App;

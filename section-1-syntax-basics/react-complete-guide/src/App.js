// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Idris', age: 21 },
//       { name: 'Aurora', age: 23 },
//       { name: 'Layfon', age: 29 },
//     ],
//   });

//   const [otherState, setOtherState] = useState({
//     otherState: 'some other state',
//   });

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//     // DON'T DO THIS this.state.persons[2].name = 'Layfon Wolfstien Alsief';
//     setPersonsState({
//       persons: [
//         { name: 'Idris', age: 21 },
//         { name: 'Aurora', age: 23 },
//         { name: 'Layfon Wolfstien', age: 19 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       >
//         My Hobbies: Racing
//       </Person>
//     </div>
//   );
// };

class App extends Component {
  state = {
    persons: [
      { name: 'Idris', age: 21 },
      { name: 'Aurora', age: 23 },
      { name: 'Layfon', age: 29 },
    ],
    otherValue: 'Some other value',
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS this.state.persons[2].name = 'Layfon Wolfstien Alsief';
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Aurora', age: 23 },
        { name: 'Layfon Wolfstien', age: 19 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Idris!!!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Ayub')}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;

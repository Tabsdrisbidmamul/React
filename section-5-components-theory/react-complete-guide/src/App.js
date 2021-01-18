// import React, { useState } from 'react';
import React, { Component } from 'react';
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
  constructor() {
    super();
    this.state = {
      persons: [
        { id: 'asdf1', name: 'Idris', age: 21 },
        { id: 'gfhf2', name: 'Aurora', age: 23 },
        { id: 'vnvh5', name: 'Layfon', age: 29 },
      ],
    };
  }

  nameChangeHandler = (event, id) => {
    // Find the index where the 2 id's match
    const personIndex = this.state.persons.findIndex((persons) => {
      return persons.id === id;
    });

    // make and manipulate copies of the person object and persons array
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];

    // update the persons array at the person object array position
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  };

  render() {
    let persons = null;
    let btnClass = ['btn'];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass.push('btn--red');
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;

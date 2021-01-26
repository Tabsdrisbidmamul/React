import React, { Component } from 'react';

// const person = (props) => {
//   console.log('[Person.js] rendering...');
//   return (
//     <div className="Person">
//       <p onClick={props.click}>
//         My name is {props.name}, and I am {props.age} years old.
//       </p>
//       <p>{props.children}</p>
//       <input
//         className="Person__input"
//         type="text"
//         onChange={props.changed}
//         value={props.name}
//       />
//     </div>
//   );
// };

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          My name is {this.props.name}, and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          className="Person__input"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

import React from 'react';

const cockpit = (props) => (
  <div>
    <h1>Hi I'm a React App</h1>
    <p className={props.classProp.join(' ')}>This is really working!</p>

    <button className={props.btnClassProp.join(' ')} onClick={props.clicked}>
      Toggle Persons
    </button>
  </div>
);

export default cockpit;

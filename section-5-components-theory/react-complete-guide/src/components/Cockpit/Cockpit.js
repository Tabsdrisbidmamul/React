import React, { useEffect } from 'react';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work useEffect');
    };
  }, [props.persons]);

  const classes = [];
  let btnClass = ['btn'];

  if (props.showPersons) {
    btnClass.push('btn--red');
  }

  if (props.persons.length <= 2) {
    classes.push('red'); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>
        This many people left: {props.persons.length}
      </p>

      <button className={btnClass.join(' ')} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;

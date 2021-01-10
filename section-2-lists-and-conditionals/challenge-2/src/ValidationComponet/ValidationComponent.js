import React from 'react';

const validationComponent = (props) => {
  let msg = null;
  const textLength = props.textLength;

  if (textLength < 5) {
    msg = <p>Text Too Short!!!</p>;
  } else {
    msg = <p>Text Long enough</p>;
  }

  return <div>{msg}</div>;
};

export default validationComponent;

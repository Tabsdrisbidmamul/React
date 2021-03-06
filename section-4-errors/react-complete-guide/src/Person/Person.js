const person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error();
  }

  return (
    <div className="Person">
      <p onClick={props.click}>
        My name is {props.name}, and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input
        className="Person__input"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default person;

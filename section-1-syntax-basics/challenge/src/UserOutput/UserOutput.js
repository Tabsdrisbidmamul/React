import './UserOutput.css';

import UserInput from '../UserInput/UserInput';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello there, {props.username}</p>
      <p>What would you like to do today</p>
      <UserInput changed={props.changed} username={props.username}></UserInput>
    </div>
  );
};

export default UserOutput;

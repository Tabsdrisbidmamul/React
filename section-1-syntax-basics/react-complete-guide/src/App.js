import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Idris" age="21" />
      <Person name="Tom" age="23" />
      <Person name="Harry" age="29">
        My Hobbies: Racing
      </Person>
    </div>
  );
}

export default App;

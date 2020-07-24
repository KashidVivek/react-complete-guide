import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Sample React App!</h1>
      <Person name='Vivek' age='23'/>
      <Person name='Max' age='28'> Hobbies:Reading</Person>
    </div>
  );
}

export default App;

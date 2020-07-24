import React,{ useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Vivek", age: 23},
      {name: "Max", age: 28}
    ]
  })

  const switchNameHandler = () => {
    // console.log('Was Clicked!') 
    // this.state.persons[0].name = "Vivek Kashid";   WRONG WAY
    setPersonsState({
      persons: [
        {name: "Vivek Kashid", age: 23},
        {name: "Max", age: 28}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Sample React App!</h1>
      <button onClick={switchNameHandler} > Switch Person</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> Hobbies: Reading</Person>
    </div>
  );

}

export default App;



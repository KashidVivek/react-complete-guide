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

  const switchNameHandler = (newName) => {
    // console.log('Was Clicked!') 
    // this.state.persons[0].name = "Vivek Kashid";   WRONG WAY
    setPersonsState({
      persons: [
        {name: "Vivek", age: 23},
        {name: newName, age: 28}
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: "Vivek", age: 23},
        {name: event.target.value, age: 28}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Sample React App!</h1>
      <button onClick={() => switchNameHandler("Maximilan")} > Switch Person</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        changed={nameChangedHandler}> 
        Hobbies: Reading
      </Person>
    </div>
  );

}

export default App;



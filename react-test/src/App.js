import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Deexit", age: 19},
      { name: "Smit", age: 20},
      { name: "Viraj", age: 19}
    ]
  }
  switchHandler = () => {
    console.log("Clicked");
  }
  render() {
    return (
      <div className="App">
        <h1> I'm react developer </h1>
        <button onClick = {this.switchHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbie: Driving</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
      // React.createElement('div',{className: 'App'}, React.createElement('h1',null,"I'm a react developer."))
    );
  }
}

export default App;

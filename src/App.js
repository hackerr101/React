import React, {Component} from 'react'; //need to import the useState hook for functional component
import './App.css';
import './Person/Person.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'abhi', age: '17'},
      {name: 'vishwa', age: '8'},
             ],
             someOtherState: 'this will be left untouched as only persons is being perged or updated',
             showPersons: false
          } 

  switchClickHandler = (newName) => {
    this.setState({              //setState is a method of component which helps merge changes in props with existing ones
      persons: [                 //adding persons as a property to the object which is being used as an update
        {name: newName, age: '17'},
        {name: 'vishwavardhan', age: '8'},
               ]
    })
  }        

  onChangeHandler = (event) => {
    this.setState({              
      persons: [              
        {name: event.target.value, age: '17'},
        {name: this.state.persons[1].name, age: '8'},
               ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({              
      persons: [              
        {name: this.state.persons[0].name, age: '17'},
        {name: event.target.value, age: '8'},
               ]
    })
  }

  togglePersonHandler = () =>{ //assigning an arrow function to a property, creates a method in the end
    const doesShow = this.state.showPersons;
    setState({showPersons: !doesShow})
  }

  render() 
    {
      const style = {
        backgroungColor: 'white',
        padding: '8px',
        border: '1px solid blue',
        cursor: 'pointer'
      }

      return (
    <div className="App">
    <h1>Hi I'm a react app</h1>
    <p>hey there</p>
    <button 
    style={style/* this method is used to style individual elements */}
    onClick={this.togglePersonHandler/*refering to the above mentioned method this.switchClickHandler.bind(this, 'Abhinav Reddy'*/}>toggle</button>
    
    {
            this.state.showPersons ?
    <div>
    <Person 
    name={this.state.persons[0].name} 
    age={this.state.persons[0].age}
    click={this.switchClickHandler}
    changed={this.onChangeHandler}>
      hobbies: diving
      </Person>

    <Person 
    name={this.state.persons[1].name} 
    age={this.state.persons[1].age}
    changed={this.nameChangeHandler}/>
    </div> : null
    }
    </div>
    );
    }
}


export default App;


//this is a statefull or smart component or container with logic


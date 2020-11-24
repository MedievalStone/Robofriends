import React from 'react';
import './App.css';
import { Cardlist } from './Components/card-list/card-list.component.jsx';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
        monsters:[]
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
    }


  render(){
    return(
      <div className='App'>
        <Cardlist >
        {this.state.monsters.map(monster=>(
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
        </Cardlist>
      </div> 
    );
  }
}


export default App;

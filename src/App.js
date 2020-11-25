import React from 'react';
import './App.css';
import { Cardlist } from './Components/card-list/card-list.component.jsx';
import { SearchBox } from './Components/search-box/search-box.component.jsx';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
        monsters:[],
        searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
    }

  render()
  {
    const {monsters,searchField} =this.state;
    const filteredMonsters= monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
        <div className='App'>
        
        <SearchBox
        placeholder='Search Box' 
        handleChange= {e=> this.setState({ searchField: e.target.value})}
        />

        <Cardlist monsters={filteredMonsters} />
        </div> 
    );
  }
}
export default App;

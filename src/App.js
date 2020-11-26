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
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
    }
  
  handleChange= (e) =>
  {
    this.setState({searchField: e.target.value});
  }
    
  render()
  {
    const {monsters,searchField} =this.state;
    const filteredMonsters= monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
        <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='Search Monster' 
        handleChange= {this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
        </div> 
    );
  }
}
export default App;

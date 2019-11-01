import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/playerCard/PlayerCard';
import Navbar from './components/Navbar/Navbar';


class App extends Component{
  state = {
    players: [],
  }

  axiosFetch = () => {
    axios.get(`http://localhost:5000/api/players`)
    .then(results => {
      console.log(results);
      this.setState({ players: results.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.axiosFetch();
  }
  //player data has country id name and searches

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <h1>Womens World Cup Players!</h1>
          {this.state.players.map(player => (
            <PlayerCard player={player} key={player.id} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;

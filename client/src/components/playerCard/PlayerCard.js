import React, { Component } from 'react';

class PlayerCard extends Component {
  //player data has country id name and searches
  render() {
    return (
      <div>
        <p>Name:{this.props.player.name}</p>
        <p>Country: {this.props.player.country}</p>
        <p>Searches: {this.props.player.searches}</p>
      </div>
    );
  }
}

export default PlayerCard;
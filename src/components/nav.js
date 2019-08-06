import React from 'react';

export default class Nav extends React.Component {
  render() {
    return(
      <nav>
        <h1>Pawlist</h1>
        <a href="_blank">About</a>
        <a href="_blank">Pets</a>
        <a href="_blank">Calendar</a>
      </nav>
    )
  }
}
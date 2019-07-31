import React from 'react';
import Nav from './nav';
import Splash from './splash';

export default class Home extends React.Component {
  render() {
    return(
      <div>
      <Nav />
      <Splash />
      </div>
    )
  }
}
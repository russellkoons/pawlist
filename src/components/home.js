import React from 'react';
import Nav from './nav';
import Splash from './splash';
import Footer from './footer';

export default class Home extends React.Component {
  render() {
    return(
      <div>
      <Nav />
      <Splash />
      <Footer />
      </div>
    )
  }
}
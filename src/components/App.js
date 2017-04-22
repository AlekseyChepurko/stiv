import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Header from './Header'
import '../assets/styles/components/defaults.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <SideMenu />
          <section className="content">
          <Header />
          </section>
      </div>
    );
  }
}

export default App;

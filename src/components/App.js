import React, { Component } from 'react';
import SideMenu from './common/SideMenu';
import Header from './common/Header'
import '../assets/styles/components/common/defaults.css';


class App extends Component {
  render() {
    return (
      <div className="App">

          <SideMenu />

          <section className="content">
            <Header />
              <main>
                  {this.props.children}
              </main>
          </section>
      </div>
    );
  }
}

export default App;

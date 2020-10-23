import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <main className='App'>
        <section className="temp-title">
          <h1>Coming Soon...</h1>
        </section>
        <section className="ww1">
          <div className="ww1-a">
            <img 
              ids="image" 
              src="/pictures/wedding.jpg" 
              alt="jltrent"
            ></img>
          </div>
          <div>
            <h2>Save the Date!</h2>
            <h3>8/21/21</h3>
          </div>
        </section>
      </main>
    );
  };
};

export default App;
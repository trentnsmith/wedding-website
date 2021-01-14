import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Story from './components/Story/Story';
import Events from './components/Events/Events';
import Registry from './components/Registry/Registry';
import WeddingParty from './components/WeddingParty/WeddingParty';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  render () {
    return (
      <main className='App'>
        <Header/>
        <Main />
        <Story />
        <Events />
        <Registry />
        <WeddingParty />
        <Footer />
      </main>
    );
  };
};

export default App;
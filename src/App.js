import React, { Component } from 'react';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Form from './components/form/Form.js'
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="mainContent wrapper">
        <div className="mainGrid">
        <Header />

        <Form />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;

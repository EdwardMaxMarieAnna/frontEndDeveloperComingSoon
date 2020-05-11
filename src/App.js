import React, { Component } from 'react';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Form from './components/form/Form.js'
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";



class App extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

    updateRender = () => {
    // Force a render without state change
    this.forceUpdate();
  }
  
  render() {
    return (
      <Router>
      <div className="mainContent wrapper">
        <div className="mainGrid">
        <Header />

        <Form updateRender={this.updateRender}/>
        </div>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;

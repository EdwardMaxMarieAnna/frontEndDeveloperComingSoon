import React, { Component } from 'react';
import About from "../../About";
import StyleOptions from "../../StyleOptions.js"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Form extends Component {

  render() {
    return (
      <Router>
      <div className="formContainer">
        <h2>This is a Form</h2>
        {/* <About /> */}
        <nav>
            <Link to="/about">Back</Link>
            <Link to="/styles">Next</Link>
        </nav>

        <Route exact path="/about" component={ About } />
        <Route exact path="/styles" component={ StyleOptions } />

        
      </div>

      </Router>
    )
  }
}

export default Form;
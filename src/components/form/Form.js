import React, { Component } from 'react';
import Preview from './Preview.js'

import About from "../../About";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Form extends Component {

  render() {
    return (
      <Router>
      <div className="formContainer">
        <h2>This is a Form</h2>
        <About />
        <nav>
            {/* <Link to="/">Back</Link>
            <Link to="/nextPageHere">Next</Link> */}
        </nav>

        {/* <Route exact path="/" component={ mainPageComponent } />
        <Route exact path="/nextPageHere" component={ nextPageComponent } /> */}

        
      </div>

      </Router>
    )
  }
}

export default Form;
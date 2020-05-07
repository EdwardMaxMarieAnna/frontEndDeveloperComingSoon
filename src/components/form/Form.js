import React, { Component } from 'react';
import Preview from './Preview.js'

import About from "../../About";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StyleOptions from '../../StyleOptions.js';

class Form extends Component {

  render() {
    return (
      <Router>
        <div className="formContainer formWrapper">
        <About />
        {/* <StyleOptions />
        <Preview /> */}


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
import React, { Component } from 'react';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Form from './components/form/Form.js'
import Preview from './components/form/Preview.js'
import PasteCode from './components/PasteCode.js'
import About from "./About.js";
import StyleOptions from "./StyleOptions.js";
import Login from "./Login.js";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from './firebase.js';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {

  constructor() {
    super();
    //create some state in Form.js for all form inputs so they can be used across forms
    this.state = {
      //About params
      firstName: "",
      lastName: "",
      subtitle: "",
      email: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      github: "",
      blog: "",
      other: "",
      // StyleOptions params
      color: "",
      background: [],
      backgroundSelected: "",
      // Login user save
      user: null,
      logedIn: false,
      font: '',
      showLogin: true,
    }
  }

    //listen for a click on back button
    handleBackButton = () => {
      //this location is specific object property which comes with Router we imported
      //it tel us which page user on right now
      //pathname return path we created
      let page = window.location.pathname;

      let backTo = '';

      //removed login page from if loop as it breaks in live. Works locally.
      if (page === '/about') {
        return backTo = '/codeCopy'
      } else if (page === '/styles') {
        return backTo = '/about'
      } else if (page === '/preview') {
        return backTo = '/styles'
      } else if (page === '/codeCopy') {
        return backTo = '/preview'
      } else {
        return (backTo = "/codeCopy");
      }
    }

    //listen for a click on next  button
    handleNextButton = () => {
      //this location is specific object property which comes with Router we imported
      //it tel us which page user on right now
      //pathname return path we created
      let page = window.location.pathname

      //removed login page from if loop as it breaks in live. Works locally.
      let nextTo = '';
      if (page === '/about') {
        return nextTo = '/styles'
      } else if (page === '/styles') {
        return nextTo = '/preview'
      } else if (page === '/preview') {
        return nextTo = '/codeCopy'
      } else if (page === '/codeCopy') {
        return nextTo = '/about'
      } else {
        return nextTo = '/about'
      }
    }

    // create handler functions (handle on change) inside Form to update those pieces of state
    // pass those functions as props to the class components
    // inside class component, on input change, call those props
    formParamInputs = (param) => {
      for (let [key, value] of Object.entries(param)) {
        this.setState({
          [key]: value,
        });
      }
    };

    styleParamInputs = (param) => {
      for (let [key, value] of Object.entries(param)) {
        this.setState({
          [key]: value,
        });
      }
    };

    updateRender = () => {
    // Force a render without state change
    // this.forceUpdate();
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
    // this.setState({
    //   showLogin: true,
    // })
  }

  componentDidUpdate() {
    if (this.state.showLogin === true) {
      this.setState({
        showLogin: false
      })
    }
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user,
          loggedIn: true,
          showLogin: false
        })
        window.location.pathname = '/about';
      });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
          logedIn: false,
          showLogin: true,
        })
        window.location.pathname = '/';
      });
  }

  anon = () => {
    firebase.auth().signInAnonymously()
      .then(function () {

      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      })
    
  
    //This breaks anon login. Runs faster than server leaving for now as it is needed to work app

    window.location.pathname = '/about'
  }
  
  render() {
    return (
      <Router>
      <div className="mainContent wrapper">
        <div className="mainGrid">
        <Header />


            <Router>
            
              <div className="formContainer">

                {/* Below code will hide the div is showLogin is false. Issue is having show login as false after everything is rendered */}
                {/* {this.state.showLogin ?
                <div className="loginForm">
                  <h1>Welcome</h1>
                  <button onClick={this.anon}>Log In Anon</button>
                  {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}

                  </div> 
                  : null} */}

                {this.state.showLogin ? <Login /> : null}
                
                <Route
                  exact
                  path="/Application"
                  render={(props) => (
                    <About formInputs={this.formParamInputs} {...props} />
                  )}
                />

                <Route
                  exact
                  path="/about"
                  render={(props) => (
                    <About
                      formInputs={this.formParamInputs}
                      globalState={this.state}
                      {...props}
                    />
                  )}
                />

                <Route
                  path="/styles"
                  render={(props) => (
                    <StyleOptions styleInputs={this.styleParamInputs} {...props} />
                  )}
                />

                <Route
                  path="/preview"
                  render={(props) => (
                    <Preview previewInputs={this.state} {...props} />
                  )}
                />

                <Route
                  path="/codeCopy"
                  render={(props) => <PasteCode formInputs={this.state} {...props} />}
                />

                <Route path="/login" component={Login} />

                <nav className="buttonDiv">
                  <Link className="button back" to={this.handleBackButton} onClick={this.props.updateRender}>Back</Link>

                  {/* <NextButton currentFormInputs={this.state} /> */}
                  <Link className="button" to={this.handleNextButton} onClick={this.props.updateRender}>Next</Link>
                </nav>
              </div>
            </Router>


        {/* <Form updateRender={this.updateRender}/> */}
        </div>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;

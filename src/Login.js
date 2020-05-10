import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    NavLink as Link,
    Route,
    Redirect
} from 'react-router-dom';
import firebase from './firebase.js';


const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


class Login extends Component {
    constructor() {
        super();
        this.state = {
            logedIn: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user,
                    loggedIn: true
                })
                window.location.pathname = '/about';
            });
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null,
                    logedIn: false
                })
                window.location.pathname = '/';
            });
    }
    
    anon = () => {
        firebase.auth().signInAnonymously()
            .then(function () {
                console.log('Logged in as Anonymous!')

            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            })
            window.location.pathname = '/about'
            // ...

    }

    render() {
        return (
            <div>
                <header>
                    <h1>Authy App, you pain in the ass!</h1>
                    {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}
                    <button onClick={this.anon}>Log In Anon</button>
                </header>
            </div>
        )
    }


}

export default Login;
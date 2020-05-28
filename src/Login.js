import React, { Component } from 'react';
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
                window.location.pathname = '/login';
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
            <div>
                    <h1>Welcome</h1>
                    <button onClick={this.anon}>Log In Anon</button>
                    {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}

            </div>
        )
    }


}

export default Login;
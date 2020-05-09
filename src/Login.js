import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase.js';


const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


class Login extends Component {
    constructor() {
        super();
        this.state = {
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
                    user
                });
            });
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
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
            });
            // ...

    }

    render() {
        return (
            <div>
                <h1>Authy App, you pain in the ass!</h1>
                <header>
                    <h1>Authy App</h1>
                    {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}
                    <button onClick={this.anon}>Log In Anon</button>
                </header>
            </div>
        )
    }


}

export default Login;
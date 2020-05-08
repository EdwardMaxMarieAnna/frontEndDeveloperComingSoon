import React, { Component } from "react"
import ReactDOM from "react-dom"
import firebase from "./firebase.js"

class Login extends Component() {


    constructor() {
        super()
        this.state = {
            user: null,

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
        .then( (result) => {
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

    
    render() {
        // const provider = new firebase.auth.GoogleAuthProvider();
        // const auth = firebase.auth();
        return (
    
    
    <header>
        <h1>Log me up, Scotty!</h1>
                {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}
    </header>
    
    
    
    
    
        )
    }








}

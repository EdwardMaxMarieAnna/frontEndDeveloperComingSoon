import React, { Component } from "react";
import './Preview.css'


class Preview extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "Marie",
            lastName: "oshaughnessy",
            subtitle: "get in touch",
            email: "bob@bob.com",
            linkedIn: "marieerin",
            twitter: "marieerincodes",
            instagram: "marieerincodes",
            blog: "",
            other: "",
            color: "yellow",
            background: "",
            backgroundImage: "",
            font: ""
        }
    }
    render() {
        const previewStyle = {
            width: "90%",
            height: "60%",
            backgroundImage: `url(${this.state.backgroundImage})`, 
            background: `${this.state.background}`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            font: ""
        }
        // if email, linkedin, twitter, instagram, blog or other are empty 
        // dont show icon

        
        return(
            
            <div className="previewSitePage">
                <h1>What do you think?</h1>
                <div className="wrapper previewViewPort" style={previewStyle}>
                    <div className="decorativeBackSplash">
                        <h2>Hello I'm {this.state.firstName} {this.state.lastName}!</h2>
                        <h3>My website is comming soon!</h3>
                        <h4>{this.state.subtitle}</h4>
                        <ul>
                            <li>
                                <a href={`https://twitter.com/${this.state.twitter}`}><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href={`https://www.linkedin.com/in/${this.state.linkedIn}`}><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href={`https://www.instagram.com/${this.state.instagram}`}><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preview;
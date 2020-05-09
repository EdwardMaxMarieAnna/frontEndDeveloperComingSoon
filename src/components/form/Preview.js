import React, { Component } from "react";
import './Preview.css'


class Preview extends Component {
    constructor() {
        super();
        this.state = {
            //true/false
            twitterHidden: "",
        }
    }
    



    
    render() {

        // if email, linkedin, twitter, instagram, blog or other are empty 
        
        // dont show icon
        const firstName = this.props.previewInputs.firstName
        const lastName = this.props.previewInputs.lastName
        const subtitle = this.props.previewInputs.subtitle
        const email = this.props.previewInputs.email
        const linkedIn = this.props.previewInputs.linkedIn
        const twitter = this.props.previewInputs.twitter
        const instagram = this.props.previewInputs.instagram
        const blog = this.props.previewInputs.blog
        const github = this.props.previewInputs.github
        const color = this.props.previewInputs.color
        const background = this.props.previewInputs.background
        const backgroundImage = this.props.previewInputs.backgroundImage
        const font = this.props.previewInputs.font

        const previewStyle = {
            width: "90%",
            height: "60%",
            backgroundImage: `url(${backgroundImage})`,
            background: `${background}`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            font: `${font}`
        }
        // if empty give hidden

        
        return(
            
            <div className="previewSitePage">
                <h1>What do you think?</h1>
                <div className="wrapper previewViewPort" style={previewStyle}>
                    <div className="decorativeBackSplash">
                        <h2>Hello I'm {firstName} {lastName}!</h2>
                        <h3>My website is comming soon!</h3>
                        <h4>{subtitle}</h4>
                        <ul>
                            <li className= {`${this.state.hiddenClass}`}>
                                <a href={`https://twitter.com/${twitter}`}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.linkedin.com/in/${linkedIn}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.instagram.com/${instagram}`}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://github.com/${github}`}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li >
                                <a href={`${blog}`}>
                                    <i className="fab fa-blogger-b"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`${email}`}>
                                    <i className="fab fa-envelope"></i>
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>
                <div className="buttonDiv">
                    <button className="back">Back</button>
                    <button className="next">Next</button>
                </div>

            </div>
        )
    }
}


export default Preview
import React, { Component } from "react";
import './Preview.css'


class Preview extends Component {
    constructor() {
        super();
        this.state = {
            linkedInHidden: "hidden",
            twitterHidden: "hidden",
            instagramHidden: "hidden",
            githubHidden: "hidden",
            blogHidden: "hidden",
            otherHidden: "hidden"
        }
    }
    componentWillUpdate() {
        // look at props
        // if email, linkedin, twitter, instagram, blog or other are empty 
        // hide icon from preview
        if (this.props.previewInputs.linkedIn === " ") {
            this.setState({
                linkedInHidden: ""
            })
        }
        if (this.props.previewInputs.twitter === " ") {
            this.setState({
                twitterHidden: ""
            })
        }
        if (this.props.previewInputs.instagram === " ") {
            this.setState({
                instagramHidden: ""
            })
        }
        if (this.props.previewInputs.github === " ") {
            this.setState({
                githubHidden: ""
            })
        }
        if (this.props.previewInputs.blog === " ") {
            this.setState({
                blogHidden: ""
            })
        }
        if (this.props.previewInputs.other === " ") {
            this.setState({
                otherHidden: ""
            })
        }
    }
    
    render() {
        const firstName = this.props.previewInputs.firstName
        const lastName = this.props.previewInputs.lastName
        const subtitle = this.props.previewInputs.subtitle
        const email = this.props.previewInputs.email
        const linkedIn = this.props.previewInputs.linkedIn
        const twitter = this.props.previewInputs.twitter
        const instagram = this.props.previewInputs.instagram
        const github = this.props.previewInputs.github
        const blog = this.props.previewInputs.blog
        const other = this.props.previewInputs.other
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
        
        return(
            
            <div className="previewSitePage innerFormContainer formWrapper">
                <h1>What do you think?</h1>
                <div className="wrapper previewViewPort" style={previewStyle}>
                    <div className="decorativeBackSplash">
                        <h2>Hello I'm {firstName} {lastName}!</h2>
                        <h3>My website is comming soon!</h3>
                        <h4>{subtitle}</h4>
                        <ul>
                            <li className={`${this.state.twitterHidden}`}>
                                <a href={`https://twitter.com/${twitter}`}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className={`${this.state.linkedInHidden}`}>
                                <a href={`https://www.linkedin.com/in/${linkedIn}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className={`${this.state.instagramHidden}`}>
                                <a href={`https://www.instagram.com/${instagram}`}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className={`${this.state.githubHidden}`}>
                                <a href={`https://github.com/${github}`}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className={`${this.state.blogHidden}`}>
                                <a href={`${blog}`}>
                                    <i class="fas fa-blog"></i>                                
                                </a>
                            </li>
                            <li>
                                <a href={`${email}`}>
                                    <i class="far fa-envelope"></i>
                                </a>
                            </li>
                            <li className={`${this.state.otherHidden}`}>
                                <a href={`${other}`}>
                                    <i class="fas fa-external-link-alt"></i>
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
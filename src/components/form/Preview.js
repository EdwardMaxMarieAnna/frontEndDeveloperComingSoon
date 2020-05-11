import React, { Component } from "react";
import "./Preview.css";
class Preview extends Component {
  constructor() {
    super();
    this.state = {
      linkedInHidden: "hidden",
      twitterHidden: "hidden",
      instagramHidden: "hidden",
      githubHidden: "hidden",
      blogHidden: "hidden",
      otherHidden: "hidden",
      color: "",
      backSplashChanges: "",
    };
  }
  componentDidMount() {
        const color = this.props.previewInputs.color
        if (color === "black_and_white") {
          this.setState({
            color: "highContrast",
            backSplashChanges: "decorativeBackSplash",
          });
        }else if( color === "yellow" | color === "orange"){
            this.setState({
                color: "golden",
                backSplashChanges: "goldenBackSplash"
            })
        }else if (color === "white") {
            this.setState({
            color: "light",
            backSplashChanges: "decorativeBackSplash",
            });
        } else if( color === "purple" | color === "magenta" | color === "green" | color === "teal" ) {
            this.setState({
            color: "mermaid",
            backSplashChanges: "decorativeBackSplash",
            });
        } else if (color === "red" | color === "blue"){
            this.setState({
                color: "golden",
                backSplashChanges: "decorativeBackSplash"
            })
        } 
        

    // look at props
    // if email, linkedin, twitter, instagram, blog or other are empty
    // hide icon from preview
    if (this.props.previewInputs.linkedIn !== "") {
      this.setState({
        linkedInHidden: "",
      });
    }
    if (this.props.previewInputs.twitter !== "") {
      this.setState({
        twitterHidden: "",
      });
    }
    if (this.props.previewInputs.instagram !== "") {
      this.setState({
        instagramHidden: "",
      });
    }
    if (this.props.previewInputs.github !== "") {
      this.setState({
        githubHidden: "",
      });
    }
    if (this.props.previewInputs.blog !== "") {
      this.setState({
        blogHidden: "",
      });
    }
    if (this.props.previewInputs.other !== "") {
      this.setState({
        otherHidden: "",
      });
    }
  }

  render() {
    const firstName = this.props.previewInputs.firstName;
    const lastName = this.props.previewInputs.lastName;
    const subtitle = this.props.previewInputs.subtitle;
    const email = this.props.previewInputs.email;
    const linkedIn = this.props.previewInputs.linkedIn;
    const twitter = this.props.previewInputs.twitter;
    const instagram = this.props.previewInputs.instagram;
    const github = this.props.previewInputs.github;
    const blog = this.props.previewInputs.blog;
    const other = this.props.previewInputs.other;
    const backgroundImage = this.props.previewInputs.backgroundSelected;
    const font = this.props.previewInputs.font;

    const previewStyle = {
      backgroundImage: `url(${backgroundImage})`,
      bachgroundColor: `${this.state.color}`,
      fontFamily: `${font}`
    };

    return (
      <div className="previewSitePage innerFormContainer formWrapper">
        <h1>What do you think?</h1>
        <div className="wrapper previewViewPort" style={previewStyle}>
          <div className={this.state.backSplashChanges}>
            <h2 className={this.state.color}>
              Hello I'm {firstName} {lastName}!
            </h2>
            <h3 className={this.state.color}>My website is comming soon!</h3>
            <h4 className={this.state.color}>{subtitle}</h4>
            <ul>
              <li className={this.state.twitterHidden}>
                <a
                  href={`https://twitter.com/${twitter}`}
                  className={this.state.color}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className={this.state.linkedInHidden}>
                <a
                  href={`https://www.linkedin.com/in/${linkedIn}`}
                  className={this.state.color}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className={this.state.instagramHidden}>
                <a
                  href={`https://www.instagram.com/${instagram}`}
                  className={this.state.color}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className={this.state.githubHidden}>
                <a
                  href={`https://github.com/${github}`}
                  className={this.state.color}
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className={this.state.blogHidden}>
                <a href={`${blog}`} className={this.state.color}>
                  <i className="fas fa-blog"></i>
                </a>
              </li>
              <li className={this.state.otherHidden}>
                <a href={`${other}`} className={this.state.color}>
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
              <li>
                <a href={`${email}`} className={this.state.color}>
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default Preview
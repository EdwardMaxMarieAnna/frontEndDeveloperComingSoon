import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PasteCode.css';

class PasteCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundSelected: props.formInputs.backgroundSelected,
            blog: props.formInputs.blog,
            color: props.formInputs.color,
            email: props.formInputs.email,
            firstName: props.formInputs.firstName,
            font: props.formInputs.font,
            lastName: props.formInputs.lastName,
            linkedIn: props.formInputs.linkedIn,
            github: props.formInputs.github,
            other: props.formInputs.other,
            step: "about",
            subtitle: props.formInputs.subtitle,
            twitter: props.formInputs.twitter
        }

        // Handles Click buttons on the bottom to refer to the right element
        this.htmlText = {};
        this.handleClickHTML = this.selectHTML.bind(this);
        this.cssText = {};
        this.handleClickCSS = this.selectCSS.bind(this);
    }

    // selects the value within textarea for HTML
    selectHTML = () => {
        this.htmlText.select();
        document.execCommand('copy');
        alert("HTML Copied")
    }
    // selects the value within textarea for CSS
    selectCSS = () => {
        this.cssText.select();
        document.execCommand('copy');
        alert("CSS Copied")
    }

    render() {
        //   sans serif // serif change
        const fontTypeCSS = (this.state.font === "Alegreya") ? "serif" : "sans-serif"
        // Changing values for the Link tag in HTML  
        const fontHTML = (this.state.font === 'Titillium Web') ? "Titillium+Web" : this.state.font
        // adds the line for font change
        const fontFinalCSS = (this.state.font !== '') ? `font-family : '${this.state.font}', ${fontTypeCSS};` : ``
        // Font in html as a Link file
        const fontLink = (this.state.font !== '') ? `<link href="https://fonts.googleapis.com/css2?family=${fontHTML}&display=swap" rel="stylesheet"> ` : `<!-- This is where you place custom font links -->`
        
        // Color Changing 
        const color = (this.state.color == 'white') ? `grey;` : `white;`  
        const backSplash = (this.state.color == 'orange' || this.state.color == 'yellow') ? `rgba(223, 172, 17, 0.59);` : `rgba(255, 255, 255, 0.3);`
        
        // Append the twitter with personal link  or placeholder to the soon to be developer on where to place it
        const linkedIn = (this.state.linkedIn !== '') ? ` <li><a href=https://www.linkedin.com/in/${this.state.linkedIn}><i class="fab fa-linkedin-in"></i></a></li>` : `<!-- Enter your LinkedIn here when you do find it! -->`
        const twitter = (this.state.twitter !== '') ? ` <li><a href=https://twitter.com/${this.state.twitter}><i class="fab fa-twitter"></i></a></li>` : `<!-- Enter your twitter here when you do find it! -->`
        const instagram = (this.state.other !== '') ? ` <li><a href=https://www.instagram.com/${this.state.other}><i class="fab fa-instagram"></i></a></li>` : `<!-- Enter your instagram here when you do find it! -->`
        const github = (this.state.github !== '') ? ` <li><a href=https://www.github.com/${this.state.github}><i class="fab fa-github"></i></a></li>` : `<!-- Enter your github here so people can see your work! -->`
        const email = (this.state.email !== '') ? ` <li><a href="mailto: ${this.state.email}"><i class="far fa-envelope"></i></a></li>` : ``
        const blog = (this.state.blog !== '') ? ` <li><a href=${this.state.github}><i class="fab fa-blogger-b"></i></a></li>` : `<!-- Enter your blog here so people can read your work! -->`

        const backgroundImage = (this.state.backgroundSelected !== '') ? `background-image:url("${this.state.backgroundSelected}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;`: `/* Background image css would have gone here */`

        const subtitle = (this.state.subtitle !== '') ? `<h4>${this.state.subtitle}</h4>` : `<!-- where you can put a calling card -->`


        return (
            <div className="CopyPasteWrapper">
                <div className="CopyPasteContainer">
                    <h2 tabIndex="0" className="CopyPasteTitle">Ok, all set! <span>Feel free to copy the code</span></h2>
                    <div className="CopyPasteEach">
                        <h4 tabIndex="0" id="copyHTML" className="CopyPasteType">HTML</h4>
                        <textarea rows="6" ref={(htmlText) => this.htmlText = htmlText} readOnly value=
                            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Incoming New Developer!</title>
    <script src="https://kit.fontawesome.com/c6324a7f25.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    ${fontLink}
</head>
<body>
    <header>
        <div class="wrapper previewViewPort">
            <div class="decorativeBackSplash">
                <h1>Hello I'm ${this.state.firstName} ${this.state.lastName}!</h1>
                <h3>My website is coming soon!</h3>
                ${subtitle}
                <ul>
                    ${linkedIn}
                    ${twitter}
                    ${instagram}
                    ${github}
                    ${email}
                    ${blog}
                </ul>
            </div>
        </div>
    </header>
</body>
</html>`}>
                        </textarea>
                    </div>
                    <div className="CopyPasteEach">
                        <h4 tabIndex="0" className="CopyPasteType">CSS</h4>
                        <textarea rows="6" ref={(cssText) => this.cssText = cssText} readOnly value=
                            {`a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}button,html,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}

.clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0; }

* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

.visuallyHidden:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; margin: -1px;border: 0;padding: 0;white-space: nowrap;clip-path: inset(100%);clip: rect(00 0 0);overflow: hidden;}

.html {
    ${fontFinalCSS}
    color:${color}
}
a {
    color:white;
}
a:hover {
    color:slateblue;
}
.previewViewPort,
.decorativeBackSplash {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.previewViewPort {
    padding: 30px;
    background-color: plum;
    height:100vh;
    ${backgroundImage}
}
.decorativeBackSplash {
    background-color: ${backSplash}
    border: 5px double rgba(255, 255, 255, 0.2);
    padding: 50px 100px;
    height:40%;
    text-align:center;
}
.previewViewPort ul {
    display: flex;
    font-size: 19px;
}
.previewViewPort li,
.previewViewPort h1,
.previewViewPort h3,
.previewViewPort h4 {
    margin: 10px;
    text-shadow: 1px 1px 0px rgba(173, 173, 173, 0.13);
    color:white;
}
.previewViewPort h1 {
    font-size: calc(20px + .2vw);
}
.previewViewPort h3 {
    font-size: calc(16.5px + .2vw );
}
.previewViewPort h4 {
    font-size: calc(15px + .2vw )
}`}>
                        </textarea>
                    </div>
                </div>
                <div className="bottomNav">
                    <button onClick={this.handleClickHTML}>Save HTML</button>
                    <button onClick={this.handleClickCSS}>Save CSS</button>
                </div>
            </div>
        )
    }
}

export default PasteCode;
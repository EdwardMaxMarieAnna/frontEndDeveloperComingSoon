(this.webpackJsonpproject6=this.webpackJsonpproject6||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.ad25eba7.png"},22:function(e,t){},48:function(e,t,a){e.exports=a(88)},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(42),r=a.n(l),i=a(13),s=a(16),c=a(6),u=a(7),m=a(9),p=a(8),h=a(19),d=a.n(h),b=a(3);var g=function(){console.log(window),console.log(window.location.pathname);var e=window.location.pathname;return"/"===e||"/login"===e?o.a.createElement("header",null,o.a.createElement("div",{className:"titleContainer"},o.a.createElement("img",{src:d.a,alt:"Future Developer logo"}),o.a.createElement("h1",null,"Future Developer")),o.a.createElement("div",{className:"landingPage sectionContainer"},o.a.createElement("h2",null,"So we heard rumors that\u2026"),o.a.createElement("p",null,"You're accessibility guru, flex box master, and your javascript ",o.a.createElement("span",null,"wizards")," are under control!"),o.a.createElement("p",null,"So you ",o.a.createElement("span",null,"made")," it! Welcome to the club."),o.a.createElement("p",null,"We want to help you! So here is a nice free ",o.a.createElement("span",null,"app")," which will create a decent looking landing page ",o.a.createElement("span",null,"for")," your upcoming portfolio."),o.a.createElement("p",null,"Yes, that's easy. "),o.a.createElement("p",null,"What can we say except ",o.a.createElement("span",null,"you"),"'re welcome."))):"/frontEndDeveloperComingSoon"!==e?o.a.createElement("header",null,o.a.createElement("div",{className:"titleContainer"},o.a.createElement("img",{src:d.a,alt:"Future Developer logo"}),o.a.createElement("h1",null,"Future Developer")),o.a.createElement("div",{className:"sectionContainer"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(b.c,{to:"/about"},o.a.createElement("div",{className:"sectionBubble"})),o.a.createElement("p",null,"Your Information")),o.a.createElement("li",null,o.a.createElement(b.c,{to:"/styles"},o.a.createElement("div",{className:"sectionBubble"})),o.a.createElement("p",null,"Options")),o.a.createElement("li",null,o.a.createElement(b.c,{to:"/preview"},o.a.createElement("div",{className:"sectionBubble"})),o.a.createElement("p",null,"Preview")),o.a.createElement("li",null,o.a.createElement(b.c,{to:"/codecopy"},o.a.createElement("div",{className:"sectionBubble"})),o.a.createElement("p",null,"Save/Submit"))))):void 0};var f=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"footerLinks"},o.a.createElement("img",{src:d.a,alt:"Future Developer logo"}),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"http://annacodes.tech"}," Anna")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://edwardboland.com"},"Edward")),o.a.createElement("li",null,o.a.createElement("a",{href:"tbt.com"},"Marie")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://maximilianlau.com"},"Max"))))))},w=(a(57),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={linkedInHidden:"hidden",twitterHidden:"hidden",instagramHidden:"hidden",githubHidden:"hidden",blogHidden:"hidden",otherHidden:"hidden",color:"",backSplashChanges:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.previewInputs.color;"black_and_white"===e|"black"===e?this.setState({color:"highContrast",backSplashChanges:"decorativeBackSplash"}):"yellow"===e|"orange"===e?this.setState({color:"golden",backSplashChanges:"goldenBackSplash"}):"white"===e?this.setState({color:"light",backSplashChanges:"decorativeBackSplash"}):"purple"===e|"magenta"===e|"green"===e|"teal"===e?this.setState({color:"mermaid",backSplashChanges:"decorativeBackSplash"}):"red"===e|"blue"===e&&this.setState({color:"golden",backSplashChanges:"decorativeBackSplash"}),""!==this.props.previewInputs.linkedIn&&this.setState({linkedInHidden:""}),""!==this.props.previewInputs.twitter&&this.setState({twitterHidden:""}),""!==this.props.previewInputs.instagram&&this.setState({instagramHidden:""}),""!==this.props.previewInputs.github&&this.setState({githubHidden:""}),""!==this.props.previewInputs.blog&&this.setState({blogHidden:""}),""!==this.props.previewInputs.other&&this.setState({otherHidden:""})}},{key:"render",value:function(){var e=this.props.previewInputs.firstName,t=this.props.previewInputs.lastName,a=this.props.previewInputs.subtitle,n=this.props.previewInputs.email,l=this.props.previewInputs.linkedIn,r=this.props.previewInputs.twitter,i=this.props.previewInputs.instagram,s=this.props.previewInputs.github,c=this.props.previewInputs.blog,u=this.props.previewInputs.other,m=this.props.previewInputs.backgroundSelected,p=this.props.previewInputs.font,h={backgroundImage:"url(".concat(m,")"),bachgroundColor:"".concat(this.state.color),fontFamily:"".concat(p)};return o.a.createElement("div",{className:"previewSitePage innerFormContainer formWrapper"},o.a.createElement("h1",null,"What do you think?"),o.a.createElement("div",{className:"wrapper previewViewPort",style:h},o.a.createElement("div",{className:this.state.backSplashChanges},o.a.createElement("h2",{className:this.state.color},"Hello I'm ",e," ",t,"!"),o.a.createElement("h3",{className:this.state.color},"My website is coming soon!"),o.a.createElement("h4",{className:this.state.color},a),o.a.createElement("ul",null,o.a.createElement("li",{className:this.state.twitterHidden},o.a.createElement("a",{href:"https://twitter.com/".concat(r),className:this.state.color},o.a.createElement("i",{className:"fab fa-twitter"}))),o.a.createElement("li",{className:this.state.linkedInHidden},o.a.createElement("a",{href:"https://www.linkedin.com/in/".concat(l),className:this.state.color},o.a.createElement("i",{className:"fab fa-linkedin-in"}))),o.a.createElement("li",{className:this.state.instagramHidden},o.a.createElement("a",{href:"https://www.instagram.com/".concat(i),className:this.state.color},o.a.createElement("i",{className:"fab fa-instagram"}))),o.a.createElement("li",{className:this.state.githubHidden},o.a.createElement("a",{href:"https://github.com/".concat(s),className:this.state.color},o.a.createElement("i",{className:"fab fa-github"}))),o.a.createElement("li",{className:this.state.blogHidden},o.a.createElement("a",{href:"".concat(c),className:this.state.color},o.a.createElement("i",{className:"fas fa-blog"}))),o.a.createElement("li",{className:this.state.otherHidden},o.a.createElement("a",{href:"".concat(u),className:this.state.color},o.a.createElement("i",{className:"fas fa-external-link-alt"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"".concat(n),className:this.state.color},o.a.createElement("i",{className:"far fa-envelope"})))))))}}]),a}(n.Component)),v=a(11),E=(a(58),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectHTML=function(){n.htmlText.select(),document.execCommand("copy"),alert("HTML Copied")},n.selectCSS=function(){n.cssText.select(),document.execCommand("copy"),alert("CSS Copied")},n.state={backgroundSelected:e.formInputs.backgroundSelected,blog:e.formInputs.blog,color:e.formInputs.color,email:e.formInputs.email,firstName:e.formInputs.firstName,font:e.formInputs.font,lastName:e.formInputs.lastName,linkedIn:e.formInputs.linkedIn,github:e.formInputs.github,other:e.formInputs.other,step:"about",subtitle:e.formInputs.subtitle,twitter:e.formInputs.twitter},n.htmlText={},n.handleClickHTML=n.selectHTML.bind(Object(v.a)(n)),n.cssText={},n.handleClickCSS=n.selectCSS.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t="Alegreya"===this.state.font?"serif":"sans-serif",a="Titillium Web"===this.state.font?"Titillium+Web":this.state.font,n=""!==this.state.font?"font-family : '".concat(this.state.font,"', ").concat(t,";"):"",l=""!==this.state.font?'<link href="https://fonts.googleapis.com/css2?family='.concat(a,'&display=swap" rel="stylesheet"> '):"\x3c!-- This is where you place custom font links --\x3e",r="white"===this.state.color?"grey;":"white;",i="orange"===this.state.color||"yellow"===this.state.color?"rgba(223, 172, 17, 0.59);":"rgba(255, 255, 255, 0.3);",s=""!==this.state.linkedIn?" <li><a href=https://www.linkedin.com/in/".concat(this.state.linkedIn,'><i class="fab fa-linkedin-in"></i></a></li>'):"\x3c!-- Enter your LinkedIn here when you do find it! --\x3e",c=""!==this.state.twitter?" <li><a href=https://twitter.com/".concat(this.state.twitter,'><i class="fab fa-twitter"></i></a></li>'):"\x3c!-- Enter your twitter here when you do find it! --\x3e",u=""!==this.state.other?" <li><a href=https://www.instagram.com/".concat(this.state.other,'><i class="fab fa-instagram"></i></a></li>'):"\x3c!-- Enter your instagram here when you do find it! --\x3e",m=""!==this.state.github?" <li><a href=https://www.github.com/".concat(this.state.github,'><i class="fab fa-github"></i></a></li>'):"\x3c!-- Enter your github here so people can see your work! --\x3e",p=""!==this.state.email?' <li><a href="mailto: '.concat(this.state.email,'"><i class="far fa-envelope"></i></a></li>'):"",h=""!==this.state.blog?" <li><a href=".concat(this.state.github,'><i class="fab fa-blogger-b"></i></a></li>'):"\x3c!-- Enter your blog here so people can read your work! --\x3e",d=""!==this.state.backgroundSelected?'background-image:url("'.concat(this.state.backgroundSelected,'");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;'):"/* Background image css would have gone here */",b=""!==this.state.subtitle?"<h4>".concat(this.state.subtitle,"</h4>"):"\x3c!-- where you can put a calling card --\x3e";return o.a.createElement("div",{className:"CopyPasteWrapper"},o.a.createElement("div",{className:"CopyPasteContainer"},o.a.createElement("h1",{tabIndex:"0",className:"CopyPasteTitle"},"Ok, all set! ",o.a.createElement("span",null,"Feel free to copy the code")),o.a.createElement("div",{className:"CopyPasteEach"},o.a.createElement("h4",{tabIndex:"0",id:"copyHTML",className:"CopyPasteType"},"HTML"),o.a.createElement("textarea",{rows:"6",ref:function(t){return e.htmlText=t},readOnly:!0,value:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Incoming New Developer!</title>\n    <script src="https://kit.fontawesome.com/c6324a7f25.js" crossorigin="anonymous"><\/script>\n    <link rel="stylesheet" href="style.css">\n    '.concat(l,'\n</head>\n<body>\n    <header>\n        <div class="wrapper previewViewPort">\n            <div class="decorativeBackSplash">\n                <h1>Hello I\'m ').concat(this.state.firstName," ").concat(this.state.lastName,"!</h1>\n                <h3>My website is coming soon!</h3>\n                ").concat(b,"\n                <ul>\n                    ").concat(s,"\n                    ").concat(c,"\n                    ").concat(u,"\n                    ").concat(m,"\n                    ").concat(p,"\n                    ").concat(h,"\n                </ul>\n            </div>\n        </div>\n    </header>\n</body>\n</html>")})),o.a.createElement("div",{className:"CopyPasteEach"},o.a.createElement("h4",{tabIndex:"0",className:"CopyPasteType"},"CSS"),o.a.createElement("textarea",{rows:"6",ref:function(t){return e.cssText=t},readOnly:!0,value:"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}button,html,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}\n\n.clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0; }\n\n* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }\n\n.visuallyHidden:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; margin: -1px;border: 0;padding: 0;white-space: nowrap;clip-path: inset(100%);clip: rect(00 0 0);overflow: hidden;}\n\n.html {\n    ".concat(n,"\n    color:").concat(r,"\n     ").concat(function(){switch(e.state.color){case"white":return"text-shadow: 1px 1px 0px rgb(44, 44, 44);";case"black_and_white":return"text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.24);";case"yellow":case"orange":return"text-shadow: 1px 1px 2px rgb(232, 163, 0);";case"red":return" text-shadow: 1px 1px 2px rgb(232, 163, 0);";case"blue":return"text-shadow: 1px 1px 2px rgb(232, 163, 0);";case"purple":case"magenta":case"green":case"teal":return"text-shadow: 1px 1px .5px rgb(0, 108, 58);";default:return"text-shadow: 1px 1px 0px rgb(44, 44, 44);"}}(),"\n}\na {\n    color:white;\n}\na:hover {\n    color:slateblue;\n}\n.previewViewPort,\n.decorativeBackSplash {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.previewViewPort {\n    padding: 30px;\n    background-color: plum;\n    height:100vh;\n    ").concat(d,"\n}\n.decorativeBackSplash {\n    background-color: ").concat(i,"\n    border: 5px double rgba(255, 255, 255, 0.2);\n    padding: 50px 100px;\n    height:40%;\n    text-align:center;\n}\n.previewViewPort ul {\n    display: flex;\n    font-size: 19px;\n}\n.previewViewPort li,\n.previewViewPort h1,\n.previewViewPort h3,\n.previewViewPort h4 {\n    margin: 10px;\n     ").concat(function(){switch(e.state.color){case"white":return"text-shadow: 1px 1px 0px rgb(44, 44, 44);";case"black_and_white":return"text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.24);";case"yellow":case"orange":return"text-shadow: 1px 1px 2px rgb(232, 163, 0);";case"red":return" text-shadow: 1px 1px 2px rgb(232, 163, 0);";case"blue":return"text-shadow: 1px 1px 2px rgb(232, 163, 0);";case"purple":case"magenta":case"green":case"teal":return"text-shadow: 1px 1px .5px rgb(0, 108, 58);";default:return"text-shadow: 1px 1px 0px rgb(44, 44, 44);"}}(),"\n}\n.previewViewPort h1 {\n    font-size: calc(20px + .2vw);\n}\n.previewViewPort h3 {\n    font-size: calc(16.5px + .2vw );\n}\n.previewViewPort h4 {\n    font-size: calc(15px + .2vw )\n}")})),o.a.createElement("div",{className:"bottomNav"},o.a.createElement("button",{onClick:this.handleClickHTML},"Save HTML"),o.a.createElement("button",{onClick:this.handleClickCSS},"Save CSS"))))}}]),a}(n.Component)),k=a(28),x=a.n(k),y=a(45),C=(a(60),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSubmit=function(t){t.preventDefault(),e.setState({firstName:"",lastName:"",subtitle:"",email:"",linkedIn:"",twitter:"",instagram:"",blog:"",other:""})},e.handleOnChange=function(){var t=Object(y.a)(x.a.mark((function t(a){var n,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.name,o=a.target.value,t.next=4,e.setState(Object(i.a)({},n,o));case 4:e.props.formInputs(e.state);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={firstName:"",lastName:"",subtitle:"",email:"",linkedIn:"",twitter:"",instagram:"",blog:"",other:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({firstName:this.props.globalState.firstName,lastName:this.props.globalState.lastName,subtitle:this.props.globalState.subtitle,email:this.props.globalState.email,linkedIn:this.props.globalState.linkedIn,twitter:this.props.globalState.twitter,instagram:this.props.globalState.instagram,other:this.props.globalState.other})}},{key:"render",value:function(){return o.a.createElement("div",{className:"innerFormContainer formWrapper about"},o.a.createElement("h1",null,"Hello! Please tell us a little about yourself."),o.a.createElement("form",{action:"",onSubmit:this.onSubmit},o.a.createElement("fieldset",{className:"firstLastName"},o.a.createElement("div",{className:"firstNameDiv"},o.a.createElement("label",{htmlFor:"firstName:"},"First name*:"),o.a.createElement("input",{type:"text",value:this.state.firstName,onChange:this.handleOnChange,name:"firstName"})),o.a.createElement("div",{className:"lastNameDiv"},o.a.createElement("label",{htmlFor:"lastName:"},"Last name*:"),o.a.createElement("input",{type:"text",value:this.state.lastName,onChange:this.handleOnChange,name:"lastName"}))),o.a.createElement("fieldset",{className:"subtitle"},o.a.createElement("label",{htmlFor:"subtitle"},"Subtitle*:"),o.a.createElement("input",{type:"text",value:this.state.subtitle,onChange:this.handleOnChange,name:"subtitle"})),o.a.createElement("fieldset",{className:"email"},o.a.createElement("label",{htmlFor:"email"},"Email*:"),o.a.createElement("input",{type:"email",value:this.state.email,onChange:this.handleOnChange,name:"email"})),o.a.createElement("fieldset",{className:"socialMedia"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"linkedIn"},"LinkedIn"),o.a.createElement("input",{type:"text",value:this.state.linkedIn,onChange:this.handleOnChange,name:"linkedIn",placeholder:"@userName"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"twitter"},"Twitter:"),o.a.createElement("input",{type:"text",value:this.state.twitter,onChange:this.handleOnChange,name:"twitter",placeholder:"@userName"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"github"},"GitHub:"),o.a.createElement("input",{type:"text",value:this.state.github,onChange:this.handleOnChange,name:"github",placeholder:"@userName"}))),o.a.createElement("fieldset",{className:"socialMedia"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"instagram"},"Instagram:"),o.a.createElement("input",{type:"text",value:this.state.instagram,onChange:this.handleOnChange,name:"instagram",placeholder:"@userName"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"blog"},"Blog:"),o.a.createElement("input",{type:"text",value:this.state.blog,onChange:this.handleOnChange,name:"blog",placeholder:"https://fullwebsiteurl.com"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"other"},"Other:"),o.a.createElement("input",{type:"text",value:this.state.other,onChange:this.handleOnChange,name:"other",placeholder:"https://fullwebsiteurl.com"}))),o.a.createElement("span",null,"*Required Fields"),o.a.createElement("input",{type:"submit",hidden:!0})))}}]),a}(n.Component)),N=a(46),I=a.n(N),S=(a(78),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChangeColor=function(t){t.preventDefault();var a=t.target.value;e.setState({color:a,background:e.state.background,backgroundSelected:e.state.backgroundSelected,font:e.state.font}),e.bringImages(a),setTimeout((function(){e.propPasser()}),250)},e.handleChangeFont=function(t){t.preventDefault(),e.setState({color:e.state.color,background:e.state.background,backgroundSelected:e.state.backgroundSelected,font:t.target.value}),setTimeout((function(){e.propPasser()}),250)},e.handleImageClick=function(t){t.preventDefault(),e.setState({color:e.state.color,background:e.state.background,backgroundSelected:t.target.src,font:e.state.font}),setTimeout((function(){e.propPasser()}),250)},e.handleResetClick=function(t){t.preventDefault(),document.getElementById("stylesForm").reset(),e.setState({color:"",background:[],backgroundSelected:"",font:""})},e.propPasser=function(){e.props.styleInputs(e.state)},e.state={color:"",background:[],backgroundSelected:"",font:""},e.handleChangeColor=e.handleChangeColor.bind(Object(v.a)(e)),e.handleChangeFont=e.handleChangeFont.bind(Object(v.a)(e)),e.handleImageClick=e.handleImageClick.bind(Object(v.a)(e)),e.handleResetClick=e.handleResetClick.bind(Object(v.a)(e)),e}return Object(u.a)(a,[{key:"bringImages",value:function(e,t){var a=this;I()({method:"GET",url:"https://api.unsplash.com/search/photos",params:{client_id:"rM6EL9yHvwZfSzdMRI7q91D8-eTxOjxU1dv1olUW_uw",query:"landing-page-background",color:"".concat(e)}}).then((function(e){a.setState({background:e.data.results})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:O,className:"innerFormContainer styleOptions"},o.a.createElement("h1",null,"STYLE OPTIONS"),o.a.createElement("form",{action:"",id:"stylesForm"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"fonts"},"Select your font*"),o.a.createElement("select",{onChange:this.handleChangeFont,name:"fonts",id:""},o.a.createElement("option",{defaultChecked:"checked",value:"empty"}),o.a.createElement("option",{value:"alegreya"},"Algreya"),o.a.createElement("option",{value:"B612"},"B612"),o.a.createElement("option",{value:"muli"},"Muli"),o.a.createElement("option",{value:"titillium"},"Titillium Web"),o.a.createElement("option",{value:"varela"},"Varela"))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"chooseColor"},"Select your color*"),o.a.createElement("select",{onChange:this.handleChangeColor,name:"color",id:"color"},o.a.createElement("option",{value:"empty"}),o.a.createElement("option",{value:"black_and_white"},"Black and White"),o.a.createElement("option",{value:"black"},"Black"),o.a.createElement("option",{value:"white"},"White"),o.a.createElement("option",{value:"yellow"},"Yellow"),o.a.createElement("option",{value:"orange"},"Orange"),o.a.createElement("option",{value:"red"},"Red"),o.a.createElement("option",{value:"purple"},"Purple"),o.a.createElement("option",{value:"magenta"},"Magenta"),o.a.createElement("option",{value:"green"},"Green"),o.a.createElement("option",{value:"teal"},"Teal"),o.a.createElement("option",{value:"blue"},"Blue"))),o.a.createElement("button",{className:"reset",onClick:this.handleResetClick,type:"reset"},"RESET")),o.a.createElement("div",{className:"imageDiv"},o.a.createElement("h2",null,"Pick a background for your site!*"),o.a.createElement("div",{className:"ShowImages"},this.state.background.map((function(t){return o.a.createElement("div",{className:"imageContainer"},o.a.createElement("img",{onClick:e.handleImageClick,key:"".concat(t.id),id:"".concat(t.id),src:"".concat(t.urls.small),alt:"".concat(t.alt_description)}))})))),o.a.createElement("span",null,"*Required Fields"))}}]),a}(n.Component)),O={backgroundColor:"#E7605C"},j=S,F=a(22),P=a.n(F),z=a(14);var T=function(e){var t=Object(z.e)();return o.a.createElement("button",{type:"button",onClick:function(){var a=window.location.pathname,n=function(e){return""===e};"/about"===a?[e.currentFormInputs.firstName,e.currentFormInputs.lastName,e.currentFormInputs.subtitle,e.currentFormInputs.email].some(n)?alert("Please fill out the required fields."):t.push("/styles"):"/styles"===a?[e.currentFormInputs.color,e.currentFormInputs.background,e.currentFormInputs.backgroundSelected].some(n)?alert("Please fill out the required fields."):t.push("/preview"):"/preview"===a?t.push("/codeCopy"):"/codeCopy"===a?t.push("/login"):t.push("/about")}},"Next")},B=(n.Component,a(79),a(29)),H=a.n(B);a(80),a(82);H.a.initializeApp({apiKey:"AIzaSyAyCFFZDCmoIWU5jyljUXyxyj1EOIJRsIQ",authDomain:"project6-two.firebaseapp.com",databaseURL:"https://project6-two.firebaseio.com",projectId:"project6-two",storageBucket:"project6-two.appspot.com",messagingSenderId:"459481245957",appId:"1:459481245957:web:ae9894b25101f7e2c9af6c"});var D=H.a,L=a(47),M=a.n(L)()(),W=new D.auth.GoogleAuthProvider,q=D.auth(),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleBackButton=function(){var e=window.location.pathname;return"/about"===e?"/codeCopy":"/styles"===e?"/about":"/preview"===e?"/styles":"/codeCopy"===e?"/preview":"/codeCopy"},e.handleNextButton=function(){var e=window.location.pathname;return"/about"===e?"/styles":"/styles"===e?"/preview":"/preview"===e?"/codeCopy":"/about"},e.formParamInputs=function(t){for(var a=0,n=Object.entries(t);a<n.length;a++){var o=Object(s.a)(n[a],2),l=o[0],r=o[1];e.setState(Object(i.a)({},l,r))}},e.styleParamInputs=function(t){for(var a=0,n=Object.entries(t);a<n.length;a++){var o=Object(s.a)(n[a],2),l=o[0],r=o[1];e.setState(Object(i.a)({},l,r))}},e.updateRender=function(){e.forceUpdate()},e.login=function(){q.signInWithPopup(W).then((function(t){var a=t.user;e.setState({user:a,loggedIn:!0,showLogin:!1}),window.location.pathname="/about"}))},e.logout=function(){q.signOut().then((function(){e.setState({user:null,logedIn:!1,showLogin:!0}),window.location.pathname="/frontEndDeveloperComingSoon"}))},e.anon=function(){D.auth().signInAnonymously().then((function(){})).catch((function(e){e.code,e.message})),setTimeout((function(){M.push("/about"),window.location.reload()}),1e3)},e.state={firstName:"",lastName:"",subtitle:"",email:"",linkedIn:"",twitter:"",instagram:"",github:"",blog:"",other:"",color:"",background:[],backgroundSelected:"",user:null,logedIn:!1,font:"",showLogin:!0,showButton:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.onAuthStateChanged((function(t){t&&e.setState({user:t})})),"/about"!==window.location.pathname&&"/styles"!==window.location.pathname&&"/preview"!==window.location.pathname&&"/codeCopy"!==window.location.pathname||this.setState({showLogin:!1}),"/about"!==window.location.pathname&&"/styles"!==window.location.pathname&&"/preview"!==window.location.pathname&&"/codeCopy"!==window.location.pathname||this.setState({showButton:!0})}},{key:"render",value:function(){var e=this;return o.a.createElement(b.a,{history:M},o.a.createElement("div",{className:"mainContent wrapper"},o.a.createElement("div",{className:"mainGrid"},o.a.createElement(g,null),o.a.createElement(b.a,null,o.a.createElement("div",{className:"formContainer"},this.state.showLogin?o.a.createElement("div",{className:"loginForm"},o.a.createElement("h1",null,"Welcome"),o.a.createElement("button",{onClick:this.anon},"Log In Anon"),this.state.user?o.a.createElement("button",{onClick:this.logout},"Log Out"):o.a.createElement("button",{onClick:this.login},"Log In")):null,o.a.createElement(z.a,{exact:!0,path:"/Application",render:function(t){return o.a.createElement(C,Object.assign({formInputs:e.formParamInputs},t))}}),o.a.createElement(z.a,{exact:!0,path:"/about",render:function(t){return o.a.createElement(C,Object.assign({formInputs:e.formParamInputs,globalState:e.state},t))}}),o.a.createElement(z.a,{path:"/styles",render:function(t){return o.a.createElement(j,Object.assign({styleInputs:e.styleParamInputs},t))}}),o.a.createElement(z.a,{path:"/preview",render:function(t){return o.a.createElement(w,Object.assign({previewInputs:e.state},t))}}),o.a.createElement(z.a,{path:"/codeCopy",render:function(t){return o.a.createElement(E,Object.assign({formInputs:e.state},t))}}),o.a.createElement(z.a,{path:"/login",component:P.a}),this.state.showButton?o.a.createElement("nav",{className:"buttonDiv"},o.a.createElement(b.b,{className:"button back",to:this.handleBackButton,onClick:this.props.updateRender},"Back"),o.a.createElement(b.b,{className:"button",to:this.handleNextButton,onClick:this.props.updateRender},"Next")):null))),o.a.createElement(f,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.43529755.chunk.js.map
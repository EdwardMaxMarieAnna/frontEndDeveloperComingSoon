import React, { Component } from 'react';
import './About.css'

class About extends Component {

    constructor() {
        super();
        this.state = {
                firstName: "",
                lastName: "",
                subtitle: "",
                email: "",
                linkedIn: "",
                twitter: "",
                instagram: "",
                blog: "",
                other: "",
        }
    }

    //to display user input when he goes back to the previous component
    componentDidMount(){
        this.setState({
            firstName: this.props.globalState.firstName,
            lastName: this.props.globalState.lastName,
            subtitle: this.props.globalState.subtitle,
            email: this.props.globalState.email,
            linkedIn: this.props.globalState.linkedIn,
            twitter: this.props.globalState.twitter,
            instagram: this.props.globalState.instagram,
            other: this.props.globalState.other

        })
    }

    onSubmit = (event) => {
        //prevent default page refresh
        event.preventDefault();
        console.log("you submitted!")
        
        //emptying states after submission and other code is done using them (so it doesn't sit in form boxes)
        this.setState({
            firstName: "",
            lastName: "",
            subtitle: "",
            email: "",
            linkedIn: "",
            twitter: "",
            instagram: "",
            blog: "",
            other: "",
        })
    }


    //below is to test simplified data collection. By setting nam in an array we can take the val of any input. Saving that to a unique state is the part I so far can't figure out.
    handleOnChange = (event) => {
        // console.log(event.target.value);
        // setting the name and val to their own variables allows us to set them to their own states without having to write multiple setStates for each form input.
        let inputName = event.target.name
        let val = event.target.value
        this.setState({
            [inputName]: val
        })
        this.props.formInputs(this.state)
    }

    render() {
        return (
            <div className="innerFormContainer formWrapper about">
                <h1>Hello! Please tell us a little about yourself.</h1>
                <form action="" onSubmit={this.onSubmit}>

                    <fieldset className="firstLastName">
                        <div className="firstNameDiv">
                        <label htmlFor="firstName:">First name*:</label>
                        <input type="text" value={this.state.firstName} onChange={this.handleOnChange} name="firstName" />
                        </div>
                        <div className="lastNameDiv">
                        <label htmlFor="lastName:">Last name*:</label>
                        <input type="text" value={this.state.lastName} onChange={this.handleOnChange} name="lastName" />
                        </div>
                    </fieldset>

                    <fieldset className="subtitle">
                        <label htmlFor="subtitle">Subtitle*:</label>
                        <input type="text" value={this.state.subtitle} onChange={this.handleOnChange} name="subtitle" />
                    </fieldset>

                    <fieldset className="email">
                        <label htmlFor="email">Email*:</label>
                        <input type="email" value={this.state.email} onChange={this.handleOnChange} name="email" />
                    </fieldset>

                    <fieldset className="socialMedia">
                        <div>
                        <label htmlFor="linkedIn">LinkedIn</label>
                            <input type="text" value={this.state.linkedIn} onChange={this.handleOnChange} name="linkedIn" placeholder="@userName"/>
                        </div>

                        <div>
                        <label htmlFor="twitter">Twitter:</label>
                            <input type="text" value={this.state.twitter} onChange={this.handleOnChange} name="twitter" placeholder="@userName"/>
                        </div>

                        <div>
                        <label htmlFor="github">GitHub:</label>
                            <input type="text" value={this.state.github} onChange={this.handleOnChange} name="github" placeholder="@userName"/>
                        </div>

                    </fieldset>
                    <fieldset className="socialMedia">
                        <div>
                        <label htmlFor="instagram">Instagram:</label>
                            <input type="text" value={this.state.instagram} onChange={this.handleOnChange} name="instagram" placeholder="@userName" />
                        </div>
                        <div>
                            <label htmlFor="blog">Blog:</label>
                            <input type="text" value={this.state.blog} onChange={this.handleOnChange} name="blog"  placeholder="https://fullwebsiteurl.com"/>
                        </div>

                        <div>
                            <label htmlFor="other">Other:</label>
                            <input type="text" value={this.state.other} onChange={this.handleOnChange} name="other" placeholder="https://fullwebsiteurl.com"/>
                        </div>

                    </fieldset>
                    <span>*Required Fields</span>

                    {/* Previous needs to go back, need to figure out how to override form submit */}
                    <input type="submit" hidden />

                </form>
            </div>
        )
    }
}

export default About;
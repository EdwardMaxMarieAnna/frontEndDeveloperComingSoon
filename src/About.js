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
            blog: "",
            other: "",
        }
    }

    onSubmit = (event) => {
        //prevent default page refresh
        event.preventDefault();
        console.log("you submitted!")
        console.log(this.state.firstName, this.state.lastName, this.state.subtitle)

        //empting states after submission and other code is done using them (so it doesn't sit in form boxes)
        this.setState({
            firstName: "",
            lastName: "",
            subtitle: "",
            email: "",
            linkedIn: "",
            twitter: "",
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
    }

    render() {
        return (
            <div className="">
                <form action="" onSubmit={this.onSubmit}>

                    <fieldset className="firstLastName">
                        <div className="firstNameDiv">
                        <label htmlFor="firstName:">First name:</label>
                        <input type="text" value={this.state.firstName} onChange={this.handleOnChange} name="firstName" />
                        </div>
                        <div className="lastNameDiv">
                        <label htmlFor="lastName:">Last name:</label>
                        <input type="text" value={this.state.lastName} onChange={this.handleOnChange} name="lastName" />
                        </div>
                    </fieldset>

                    <fieldset className="subtitle">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input type="text" value={this.state.subtitle} onChange={this.handleOnChange} name="subtitle" />
                    </fieldset>

                    <fieldset className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={this.state.email} onChange={this.handleOnChange} name="email" />
                    </fieldset>

                    <fieldset className="socialMedia">
                        <div>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input type="text" value={this.state.linkedIn} onChange={this.handleOnChange} name="linkedIn" />
                        </div>

                        <div>
                        <label htmlFor="twitter">Twitter:</label>
                        <input type="text" value={this.state.twitter} onChange={this.handleOnChange} name="twitter" />
                        </div>

                        <div>
                        <label htmlFor="blog">Blog:</label>
                        <input type="text" value={this.state.blog} onChange={this.handleOnChange} name="blog" />
                        </div>

                        <div>
                        <label htmlFor="other">Other:</label>
                        <input type="text" value={this.state.other} onChange={this.handleOnChange} name="other" />
                        </div>

                    </fieldset>
                    {/* Previous needs to go back, need to figure out how to override form submit */}
                    <div className="buttonDiv">
                    <button className="back">Back</button>
                    <button className="next">Next</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default About;
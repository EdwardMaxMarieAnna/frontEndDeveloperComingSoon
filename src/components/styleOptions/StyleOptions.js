import React, { Component } from 'react';
import axios from 'axios';

export class StyleOptions extends Component {
    constructor() {
        super()
        this.state = {
            // this is our user's color selection
            color: '',
            background: [],
            // id of selected background goes here
            backgroundSelected: '',
            font: ''
        };
        //this is to make call b functions work
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeFont = this.handleChangeFont.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    
    bringMyImage(query) {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos`,
            params: {
                client_id: 'g3jquKzMkhtk1NzZNPnL2KdDiLUCymPJ0y581-d5H9Y',
                // this one I am not fully happy about, it brings really general results.. so maybe SOMEONE CAN LOOK WHAT KIND OF QUERY WHOULF BRING US THE BEST RESULTS
                // there are bunch of collections we can search for, it's addible parametr
                query: 'landing-page-backgrounds',
                color: `${query}`
            }
        }).then((res) => {
            console.log(res.data.results);
            this.setState({
                background: res.data.results
            });
        })
    }

    //on change we are getting options value which matched with API param colour
    handleChangeColor = (event) => {
        event.preventDefault();
        const usersColor = event.target.value;
        console.log(usersColor);
        this.bringMyImage(usersColor);

        this.setState({
            color: usersColor
        })
    }

    handleChangeFont = (event) => {
        event.preventDefault();
        console.log(event.target.value)

        this.setState({
            font: event.target.value
        })
    }

    handleImageClick = (event) => {
        event.preventDefault();
        console.log(event.target.id)

        this.setState({
            backgroundSelected: event.target.id
        })
    }

    handleResetClick = (event) => {
        event.preventDefault();
        console.log(this);

        //reseting form
        document.getElementById('optionsForm').reset();
        //clear state
        this.setState({
            color: '',
            background: [],
            backgroundSelected: '',
            font: ''
        })
    }

    render() {
        return (
            <div style={style}>
                <h1>STYLE OPTIONS</h1>

                {/* this is option for for our font selection */}
                {/* first five fonts from this article DO WE NEED MORE? IF SO PLEASE ADD 
                https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html*/}
                <form action="" id="optionsForm">
                    <label htmlFor="fonts">Select your font</label>
                    {/* listening for changes */}
                    <select onChange={this.handleChangeFont} name="fonts" id="">
                        <option defaultChecked="checked" value="empty"></option>
                        <option value="alegreya">Algreya</option>
                        <option value="B612">B612</option>
                        <option value="muli">Muli</option>
                        <option value="titillium">Titillium Web</option>
                        <option value="varela">Varela</ option>
                    </select>

                    <label htmlFor="chooseColor">Select your color</label>
                    {/* every time user passes changes handleChange function activates */}
                    <select onChange={this.handleChangeColor} name="color" id="color">
                        <option value="empty"></option>
                        {/* values are equal to api documentation, so don't change them */}
                        <option value="black_and_white">Black and White</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                        <option value="purple">Purple</option>
                        <option value="magenta">Magenta</option>
                        <option value="green">Green</option>
                        <option value="teal">Teal</option>
                        <option value="blue">Blue</option>
                    </select>

                    {/* reset button NEEDS STYLE */}
                    {/* <button onClick={this.handleResetClick} type="reset">RESET</button> */}
                    <input onClick={this.handleResetClick} type="reset" value="Reset"/>
                </form>

                <div>
                    {this.state.background.map((image) => {
                        return(
                            // console.log(image.urls.small)
                            //there are bunch of other options to select check console log on line 31 WE CAN CHANGE STYLING EASILY
                            <figure onClick={this.handleImageClick}>
                                < img id={`${image.id}`} src = {`${image.urls.small}`} alt=""/>
                            </figure>
                        )
                    })}
                </div>

            </div>
        )
    }
}

const style = {
    backgroundColor: '#E7605C'
}

export default StyleOptions

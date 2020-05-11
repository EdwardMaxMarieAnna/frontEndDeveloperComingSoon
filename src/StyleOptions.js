import React, { Component } from "react";
import axios from "axios";
import "./StyleOptions.css";

//hiding api hehehehe
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
export class StyleOptions extends Component {
    constructor() {
        super()
        this.state = {
            // this is our user's color selection
            color: '',
            //don't pass this prop, just to store options for user to pick from
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
    
    bringImages(query, page) {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos`,
            params: {
                client_id: API_KEY,
                query: 'landing-page-background',
                color: `${query}`
            }
        }).then((res) => {
            console.log(res.data.results)
            this.setState({
                background: res.data.results
            });
        })
    }

        // bringImages(query, page) {
//     axios({
//       method: "GET",
//       url: `https://api.unsplash.com/search/photos`,
//       params: {
//         client_id: `rM6EL9yHvwZfSzdMRI7q91D8-eTxOjxU1dv1olUW_uw`,
//         query: "landing-page-background",
//         color: `${query}`,
//       },
//     }).then((res) => {
//       console.log(res.data.results);
//       this.setState({
//         background: res.data.results,
//       });
//     });
//   }


    //on change we are getting options value which matched with API param colour
    handleChangeColor = (event) => {
        event.preventDefault();
        const usersColor = event.target.value;

        //saving to state
        this.setState({
            color: usersColor,
            background: this.state.background,
            backgroundSelected: this.state.backgroundSelected,
            font: this.state.font
        })

        //passing color and page# to bringImages
        this.bringImages(usersColor);

        // using a timeout function to run function as it runs before the state is set causing issues passing props to Form.js
        setTimeout(() => {
            this.propPasser()
        }, 250)

    }

    handleChangeFont = (event) => {
        event.preventDefault();

        this.setState({
            color: this.state.color,
            background: this.state.background,
            backgroundSelected: this.state.backgroundSelected,
            font: event.target.value
        })

        // using a timeout function to run function as it runs before the state is set causing issues passing props to Form.js
        setTimeout(() => {
            this.propPasser()
        }, 250)
    }

    handleImageClick = (event) => {
        event.preventDefault();
        this.setState({
            color: this.state.color,
            background: this.state.background,
            backgroundSelected: event.target.src,
            font: this.state.backgroundSelected
        })

        // using a timeout function to run function as it runs before the state is set causing issues passing props to Form.js
        setTimeout(() => {
            this.propPasser()
        }, 250)
    }

    handleResetClick = (event) => {
        event.preventDefault();

        //reseting form
        document.getElementById('stylesForm').reset();
        //clear state
        this.setState({
            color: '',
            background: [],
            backgroundSelected: '',
            font: ''
        })
    }

    // put it into it's own function so I can delay it.
    propPasser = () => {
        this.props.styleInputs(this.state)
    }



    render() {
        return (
            <div style={style} className="innerFormContainer styleOptions">
                <h1>STYLE OPTIONS</h1>

                {/* this is option for for our font selection */}

                {/* first five fonts from this article
                https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html*/}
                <form action="" id="stylesForm">
                    <div>
                        <label htmlFor="fonts">Select your font*</label>
                        {/* listen for changes */}
                        <select 
                            onChange={this.handleChangeFont} 
                            name="fonts" 
                            id=""
                        >
                            <option defaultChecked="checked" value="empty"></option>
                            <option value="alegreya">Algreya</option>
                            <option value="B612">B612</option>
                            <option value="muli">Muli</option>
                            <option value="titillium">Titillium Web</option>
                            <option value="varela">Varela</ option>
                        </select>
                    </div>
                    <div>

                        <label htmlFor="chooseColor">Select your color*</label>
                        {/* every time user passes changes handleChange function activates */}

                        <select 
                            onChange={this.handleChangeColor} 
                            name="color" 
                            id="color"
                        >
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
                    </div>
                    {/* reset button */}
                    <button className="reset" onClick={this.handleResetClick} type="reset">RESET</button>
                    {/* <input onClick={this.handleResetClick} type="reset" value="Reset"/> */}
                </form>
                <div className="imageDiv">
                    <h2>Pick a background for your site!</h2>
                    <div className="ShowImages">
                        {this.state.background.map((image) => {
                            return (
                                // there are bunch of other options to select
                                <div className="imageContainer">
                                    < img
                                        onClick={this.handleImageClick}
                                        key={`${image.id}`}
                                        id={`${image.id}`}
                                        // instead of small can also use full, raw, regular, thumb
                                        src={`${image.urls.small}`}
                                        alt={`${image.alt_description}`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

//temprorary style
const style = {
  backgroundColor: "#E7605C",
};

export default StyleOptions;

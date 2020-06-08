import React from "react"
import { useHistory } from "react-router-dom";
// import Form from "./Form"

function NextButton(props) {
  const history = useHistory();

  function handleClick() {    
        let page = window.location.pathname;

        const isEmpty = (e) => e === "";


        let nextTo = "";
        //back button on about back doesn't return anythig so don't click it until you add more
        if (page === "/about") {        
            if ([props.currentFormInputs.firstName, props.currentFormInputs.lastName, props.currentFormInputs.subtitle, props.currentFormInputs.email].some(isEmpty)
            ){
                alert("Please fill out the required fields.");
        } else {
            history.push("/styles");
        }
        } else if (page === "/styles") {
                if (
                  [
                    props.currentFormInputs.color,
                    props.currentFormInputs.background,
                    props.currentFormInputs.backgroundSelected,
                  ].some(isEmpty)
                ) {
                    alert("Please fill out the required fields.");
                } else {
                    history.push("/preview");
                }
            
        } else if (page === "/preview") {
            history.push("/codeCopy");
        } else if (page === "/codeCopy") {
            // const r = window.confirm("Pressing next. Do you wish to erase your creation?");
            // if (r == true) {
            //     history.push("/login");
            // }
            history.push("/login");
        } else if (page === "/login") {
            history.push("/about");
        } else {
            history.push("/about");
          // on load opens 'home page', so at least we can move forward to first page
        }

  }

  return (
    
    <button type="button" onClick={handleClick}>
      Next
    </button>
  );
}

export default NextButton
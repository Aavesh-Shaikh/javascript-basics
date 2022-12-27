import "./Animation.css"
import React, { Fragment } from "react";

const Animation = (props) => {

    return (
       <React.Fragment>
        <div className="main">
        <div className="sum"><h1>{props.sumResult}</h1></div>
        <div className="sub"><h1>{props.subResult}</h1></div>
        <div className="mult"><h1>{props.multResult}</h1></div>
        <div className="divi"><h1>{props.diviResult}</h1></div>
        </div>
        </React.Fragment>
        )
    

}
export default Animation;
import React from "react";
import "./section1.css";
export const Section1 = (props) => {
    return (
        <div id="S1Container">
            <div id="S1Title">
                {props.title}
            </div>
            <div id="S2Center">
                <div id="S2">{props.FirstN}
                    {/* <h3>niezle</h3> */}
                </div>

                {<div id="S3">  {props.SecondN}   <h3>drugie</h3></div>}
                {/* <div id="S4"> {props.ThirdN}  <h3>trzecie</h3></div> */}


            </div>



        </div>


    )
}
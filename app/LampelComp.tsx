'use client';
import React from "react";
//add react usestate
import { useState } from 'react';


const LampelComp:React.FC<{textToSend: string}> = (props) => {
    const [checkBoxValue, setCheckBoxValue] = useState(false);


    const checkBoxClicked = () => {
        console.log("checkbox clicked");
        setCheckBoxValue(!checkBoxValue);
    }

    return (
        <div>
            //add checkbox
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={checkBoxClicked}></input>
            <h1 className="text-9xl">LampelComp
            <span style={{color: checkBoxValue === true ? 'blue' : 'red'}}> {props.textToSend}</span>
            </h1>
        </div>
    );
}
export default LampelComp;
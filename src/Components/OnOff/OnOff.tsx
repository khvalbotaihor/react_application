import React, {useState} from "react";
import {setFlagsFromString} from "v8";

type OnOffPropsType = {
    //on: boolean
}

function OnOff(props:OnOffPropsType) {

let[on, SetOnOff] = useState<boolean>(false);

    const OnButtonStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginRight: "3px",
        backgroundColor:on ? "green" : "white",
        padding: "2px"


    }
    const OffButtonStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginRight: "3px",
        backgroundColor:on ? "white": "red",
        padding: "2px"


    }
    const IndicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display:"inline-block",
        backgroundColor:on ? "green" : "red",


    }

    return(
    <div>
        <div style={OnButtonStyle} onClick={()=>{SetOnOff(false)}}>On</div>
        <div style={OffButtonStyle} onClick={()=>{SetOnOff(true)}}>Off</div>
        <div style={IndicatorStyle} ></div>
    </div>
)
}
export default OnOff;
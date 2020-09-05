import React from "react";

type OnOffPropsType = {
    on: boolean
}

function OnOff(props:OnOffPropsType) {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding:"2px",
        backgroundColor:props.on===true ? "green" : "",


    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding:"2px",
        backgroundColor:props.on===false? "red" : "",

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor:props.on===true ? "green" : "red",

    }

return (
    <div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
)
}

export default OnOff;
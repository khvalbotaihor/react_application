import React from "react";

type OnOffPropsType = {
    on: boolean
}

function OnOff(props:OnOffPropsType) {
    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        backgroundColor:"green",
        display: "inline-block",
        marginLeft:"2px"

    }
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        backgroundColor:"red",
        display: "inline-block",
        marginLeft:"2px",
        marginRight:"2px",
    }
    const cicleStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor:"green",
        display: "inline-block",
    }



return (
    <div>
        <div style={onStyle}></div>
        <div style={offStyle}></div>
        <div style={cicleStyle}></div>
    </div>
)
}

export default OnOff;
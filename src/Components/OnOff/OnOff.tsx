import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (value: boolean) => void
}


function OnOff(props: OnOffPropsType) {

    const OnButtonStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "3px",
        backgroundColor: props.on ? "green" : "white",
        padding: "2px"


    }
    const OffButtonStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "3px",
        backgroundColor: props.on ? "white" : "red",
        padding: "2px"


    }
    const IndicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red",
    }

    const onClicked = () => {
        props.onChange(!props.on)
    }

    const offClicked = () => {
        props.onChange(!props.on)
    }

    return (
        <div>
            <div style={OnButtonStyle} onClick={onClicked}>On</div>
            <div style={OffButtonStyle} onClick={offClicked}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

export default OnOff;
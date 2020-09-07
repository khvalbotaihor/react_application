import React from "react";

type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    onChange: (value:boolean)=> void
}

function Accordion(props:AccordionPropsType) {
    debugger;
    console.log("UncontrolledAccordion rendered")
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={()=>{props.onChange(!props.collapsed)}}
               />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title:string
    onChange: ()=> void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitleRendering")
    return(
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBodyRendering")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
import React from "react";

type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    setCollapsed: (value:boolean)=> void
}

function Accordion(props:AccordionPropsType) {
    debugger;
    console.log("UncontrolledAccordion rendered")
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={()=>{props.setCollapsed(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title:string
    setCollapsed: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitleRendering")
    return(
        <h3 onClick={()=> {props.setCollapsed()}}>{props.title}</h3>
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
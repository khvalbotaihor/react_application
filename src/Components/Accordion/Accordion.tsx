import React from "react";

type AccordionPropsType = {
    titleValue:string
}

function Accordion(props:AccordionPropsType) {
    console.log("Accordion rendered")
    return(
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody />
        </div>
    )
}

function AccordionTitle(props:any) {
    console.log("AccordionTitleRendering")
    return(
        <h3>{props.title}</h3>
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
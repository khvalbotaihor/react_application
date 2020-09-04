import React from "react";



function Accordion(props:any) {
    console.log("Accordion rendered")
    return(
        <div>
            <AccordionTitle title={props.title}/>
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
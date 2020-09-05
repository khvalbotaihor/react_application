import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props:AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")

    let[collapsed, setCollapsed] = useState<boolean>(true);

        return(
            <div>
                <AccordionTitle title={props.titleValue}/><button>Toggle</button>
                {!collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title:string
}

function AccordionTitle(props:AccordionTitlePropsType) {
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

export default UncontrolledAccordion;
import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props:AccordionPropsType) {
    console.log("UncontrolledAccordion rendered")

    let[collapsed, setCollapsed] = useState<boolean>(true);

        return(
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
                {!collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title:string
    setCollapsed: (value:boolean)=> void
    collapsed: boolean
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitleRendering")
    return(
        <h3 onClick={()=>{props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
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
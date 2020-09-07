import React, {useState} from 'react';
import './App.css';
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";


// function declaration
function App() {
    console.log("App rendering")

let[ratingValue, setRatingValue] = useState<RatingValueType>(3);
let[collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div className={"App"}>


            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            //controlled components
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menushka"} collapsed={collapsed} setCollapsed={setCollapsed}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;


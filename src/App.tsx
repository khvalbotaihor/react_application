import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";


// function declaration
function App() {
    console.log("App rendering")
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div>


            <OnOff />
            <OnOff />
            <UncontrolledRating />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
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


import React from 'react';
import './App.css';
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";


// function declaration
function App() {
    console.log("App rendering")
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div className={"App"}>


            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <Rating value={3} />
            <Accordion titleValue={"Menushka"} collapsed={false} />
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


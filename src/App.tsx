import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";


// function declaration
function App() {
    console.log("App rendering")
    debugger;
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div>

           <Accordion titleValue={"Menu"} collapsed={true} />

            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={2} />


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


import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";


// function declaration
function App() {
    console.log("App rendering")
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div className="App">
            <div>

                {/*                 <UncontrolledRating value={0} />
                <UncontrolledRating value={1} />
                <UncontrolledRating value={2} />
                <UncontrolledRating value={3} />
                <UncontrolledRating value={4} />
                <UncontrolledRating value={5} />*/}

                <hr />
                <OnOff/>
                <OnOff/>
                <OnOff/>
                <OnOff/>
                <hr />
                <UncontrolledAccordion titleValue={"Menu"} />
                <UncontrolledAccordion titleValue={"Users"} />

                <UncontrolledRating value={2} />


            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title:string
}

function PageTitle(props:PageTitlePropsType) {
    console.log("AppTitle rendering")
    return(
        <h1>{props.title}</h1>
    )
}

export default App;

/*
// function expression
const App2 = function () {

}
// стрелочная функция, для обработчика собитий
const App3 = ()=>{

}*/

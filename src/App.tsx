import React from 'react';
import './App.css';


// function declaration
function App() {
    console.log("App rendering")
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div className="App">
            <div>
                <AppTitle />
                <Rating />
                <Accordion />
                <Rating />
            </div>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return(
        <>This is App component</>
    )
}

export default App;

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Accordion() {
    console.log("Accordion rendered")
    return(
        <div>
            <AccordionTitle />
            <AccordionBody />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}

function AccordionTitle() {
    return(
        <h3>Menu</h3>
    )
}


function Star() {
    console.log("Start rendering")
    return(
        <div>star</div>
    )
}
/*
// function expression
const App2 = function () {

}
// стрелочная функция, для обработчика собитий
const App3 = ()=>{

}*/

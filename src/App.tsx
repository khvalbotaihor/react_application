import React from 'react';
import './App.css';


// function declaration
function App() {
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div className="App">
            <div>
                <AppTitle />
                <Rating />
                <Accordion />
            </div>
        </div>
    );
}

function AppTitle() {
    return(
        <>This is App component</>
    )
}

export default App;

function Rating() {
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
    return(
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}

function Star() {
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

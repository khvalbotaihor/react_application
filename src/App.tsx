import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";


// function declaration
function App() {
    console.log("App rendering")
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div className="App">
            <div>
                <PageTitle title={"This is App component"}/>
                <PageTitle title={"My friends"}/>
                Article 1
                <Rating value={3}/>
                <Accordion value={"Menu"}/>
                <Accordion value={"Users"}/>
                Article 2
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
            </div>
        </div>
    );
}

function PageTitle(props:any) {
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

import React from 'react';
import './App.css';


// function declaration
function App() {
    // вот здесь функция может делать штото полезное
    // в конце функция обязана вернуть какойто результат, возвращают JSX
    return (
        <div className="App">
            <div>
                This is App component
            </div>
        </div>
    );
}

export default App;

function Rating() {
    return (
        <div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
        </div>
    )
}


/*
// function expression
const App2 = function () {

}
// стрелочная функция, для обработчика собитий
const App3 = ()=>{

}*/

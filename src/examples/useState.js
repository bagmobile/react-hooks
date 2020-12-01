import React, {useState} from 'react'
import './App.css';

function App() {

    const [counter, setCounter] = useState(() => {
        return Math.trunc(Math.random() * 20);
    });

    const [state, setState] = useState({
        title: `Title`,
        date: Date.now()
    });


    const inc = () => {
        setCounter(prev => prev + 1);
    }

    const dec = () => {
        setCounter(counter - 1);
    }

    const changeName = () => {
        setState(prev => {return {...prev, title: `New`}})
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={inc}>Add</button>
            <button onClick={dec}>Sub</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={changeName}>Change name</button>
        </div>
    );
}

export default App;

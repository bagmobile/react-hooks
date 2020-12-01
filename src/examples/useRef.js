import React, {useEffect, useRef, useState} from 'react'
import './App.css';

function App() {
    //const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState(`initial`);
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef(``);
    const focusHandler = () => inputRef.current.focus();

    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current.value);
        // setRenderCount(prev => prev + 1); // infinite loop
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value])

    return (
        <div>
            <h1>Render count {renderCount.current}</h1>
            <h1>Prev value {prevValue.current}</h1>
            <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focusHandler}>Focus</button>
        </div>
    );
}

export default App;

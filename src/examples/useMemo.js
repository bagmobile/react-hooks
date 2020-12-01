import React, {useEffect, useMemo, useRef, useState} from 'react'
import './App.css';

function complexCompute(num){
    let i = 0;
    while (i< 1000000000) i++;
    return num * 2;
}

function App() {
    const [number, setNumber] = useState(39);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'red' : 'blue'
    }), [colored]);

    const computed = useMemo(()=> {
        return complexCompute(number);
    }, [number]);

    useEffect(() => {
        console.log(`Styles changed`);
    }, [styles]);

    return (
        <>
            <h1 style={styles}>Property: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Sub</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
        </>
    );
}

export default App;

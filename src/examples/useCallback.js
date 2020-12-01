import React, {useCallback, useState} from 'react'
import './App.css';
import ItemsList from "./ItemsList";

function App() {
    const [count, setCount] = useState(1);
    const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? 'red' : 'blue'
    };

    const generateItemsFromAPI = useCallback((index) => {

        return Array(count).fill(``).map((_, i) => `Element ${i + index}`);
    }, [count]);


    return (
        <>
            <h1 style={styles}>Property: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
            <ItemsList getItems={generateItemsFromAPI}/>
        </>
    );
}

export default App;

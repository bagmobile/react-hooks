import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

    const [type, setType] = useState(`users`);
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({x:0, y: 0});
    const mouseMovieHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        console.log(`Component did mount`);
        window.addEventListener(`mousemove`, mouseMovieHandler);

    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json));
        return () => {
            window.removeEventListener(`mousemove`, mouseMovieHandler);
        }
    }, [type]);



    return (
        <div>
            <h1>Resource: {type}</h1>
            <button onClick={() => setType(`users`)}>Users</button>
            <button onClick={() => setType(`todos`)}>Todos</button>
            <button onClick={() => setType(`posts`)}>Post</button>

            <pre>{JSON.stringify(pos, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;

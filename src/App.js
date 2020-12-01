import React, {useEffect, useState} from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log(`Value: ${value}`);
    }, [value]);
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        setValue(event.target.value);
    };
    const clear = () => setValue(``);

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {
    const input = useInput(``);
    const lastName = useInput(`---`);

    useLogger(input.value)

    return (
        <div className={`container pt-3`}>
            <h1>{input.value} {lastName.value}</h1>
            <input type={`text`} {...input.bind} /*value={input.value} onChange={input.onChange}*//>
            <button onClick={() => input.clear()}>Clear</button>
            <input type={`text`} {...lastName.bind}/>
        </div>
    );
}

export default App;

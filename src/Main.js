import React from 'react';
import {useAlert} from "./alert/AlertContext";

function Main() {
    const {toggle} = useAlert();
    return (
        <>
            <h1>Hi context</h1>
            <button onClick={() => toggle(`Text alert`)}>show alert</button>
        </>
    );
}

export default Main;

import React from 'react';
import {useAlert} from "./AlertContext";

function Alert() {
    const {visible, text, toggle} = useAlert();

    return visible && (
        <div className={`alert alert-danger`} onClick={toggle}>
            {text}
        </div>
    );
}

export default Alert;

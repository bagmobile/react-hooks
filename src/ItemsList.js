import React, {useEffect, useState} from 'react';

export default function ({getItems}) {
    const [items, setItems] = useState([]);

    useEffect(() => {

            setItems(getItems(5));
            console.log(`use ef`);
        },
        [getItems]
    );

    return (<ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>);
}

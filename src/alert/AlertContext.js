import React, {useContext, useReducer} from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case `TOGGLE`:
            return {
                ...state,
                visible: !state.visible,
                text: action.text
            }
        default:
            return state;
    }
}

export const AlertProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {visible: false, text: ``});
    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            toggle: (text = ``) => dispatch({type: `TOGGLE`, text})
        }}>
            {children}
        </AlertContext.Provider>
    );
    //const [alert, setAlert] = useState(false);
    //const toggle = () => setAlert(prev => !prev);
    /*return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            {children}
        </AlertContext.Provider>
    );*/
}

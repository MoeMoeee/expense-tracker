import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
    {id: 1, text: 'cash', amount: 20 },
    {id: 2, text: 'expense', amount:-20 }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return [<GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}
    </GlobalContext.Provider>];
}
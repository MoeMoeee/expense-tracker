import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
    {id: 1, text: 'Cash', amount: 2000 },
    {id: 2, text: 'Expense', amount:-2000 },
    {id: 3, text: 'Expense', amount:-2000 },
    {id: 4, text: 'Salary', amount: 5000 }
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
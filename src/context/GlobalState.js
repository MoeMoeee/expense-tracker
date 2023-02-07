import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });

        console.log(transaction.id);

    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
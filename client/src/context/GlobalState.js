import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);   
    
    // GET request from /api/v1/transactions
    // to get the data store in the database
    async function getTransaction () {
        try {
            const res = await axios.get('/api/v1/transactions');
            
            dispatch({
                type: 'GET_TRANSACTION',
                payload: res.data.data
            });
        } 
        
        catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data
            });
        }
    }


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
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            getTransaction,
            error: state.error,
            loading: state.loading
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
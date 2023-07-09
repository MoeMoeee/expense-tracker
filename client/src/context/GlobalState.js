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


    async function deleteTransaction (id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            
            dispatch({
                type: 'DELETE',
                payload: id
            });
        } 
        
        catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data
            });
        }
    }

    async function addTransaction (transaction) {
        // send data in axios
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);
            
            dispatch({
                type: 'ADD',
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
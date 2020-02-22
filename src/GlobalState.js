import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial state

const  initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -5},
        { id: 2, text: 'Book', amount: -10},
        { id: 3, text: 'Salary', amount: 200},
        { id: 4, text: 'Shoes', amount: -40}
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        { children }
    </GlobalContext.Provider>);
}
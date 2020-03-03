import React, { useState } from 'react'

const alenaState = {
    name: 'Alena',
    email: 'alena@gmail.com'
}

// creating a context

export const Context = React.createContext();

// wrapper component - context provider
export const Store = ({ children }) => {
    const [state, setState] = useState(alenaState);
    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

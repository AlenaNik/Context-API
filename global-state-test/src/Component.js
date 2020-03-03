import React, {useContext} from 'react'
import { Context } from './Store'

export const Component = () => {
    const [state, setState] = useContext(Context)

    const handleClick = async () => {
        const person = await(await fetch('http://uinames.com/api/?ext')).json();
        setState(person)
    }

    return (
        <>
            <h2>I'm a component with context</h2>
            <p>name: {state.name}</p>
            <p>email: {state.email}</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

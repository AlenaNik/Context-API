import React, {useContext} from 'react'
import { Context } from './Store'

export const Component = () => {
    const [state, setState] = useContext(Context)

    return (
        <>
            <h2>I'm a component with context</h2>
            <p>name: {state.name}</p>
            <p>email: {state.email}</p>

        </>
    )
}

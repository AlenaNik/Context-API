import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

export const Transaction = ({ name, num, id }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = num < 0 ? '-' : '+'

    return (
        <li className={num < 0 ? 'minus' : 'plus'}>
                    {name} <span>{sign}{Math.abs(num)}$</span>
                    <button 
                    onClick={() =>  deleteTransaction(id)}
                    className="delete-btn">
                        x
                    </button>
                </li>  
    )
}

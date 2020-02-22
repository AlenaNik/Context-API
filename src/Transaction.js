import React from 'react'

export const Transaction = ({ name, num }) => {
    const sign = num < 0 ? '-' : '+'

    return (
        <li className="minus">
                    {name} <span>{sign}{Math.abs(num)}$</span>
                    <button className="delete-btn">
                        x
                    </button>
                </li>  
    )
}

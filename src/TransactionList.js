import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from './GlobalState'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
       <>
        <h3>History</h3>
            <ul id="list" className="list">
                { transactions ? transactions.map(transaction => (
                        <Transaction 
                        key={transaction.id}
                        name={transaction.text}
                        num={transaction.amount}
                        id={transaction.id}
                        />
                )) : ''}
                
            </ul>
       </>
    )
}

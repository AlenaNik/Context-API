import React, {useState} from 'react'


export const AddTransaction = () => {
const [text, setText] = useState('')
const [amount, setAmount] = useState(0)


    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                        <br/>
                        (negative - expense, positive - inconme)
                    </label>
                    <input type="number" 
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

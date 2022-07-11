import { useState, useContext } from 'react'
import { UserContext, Card } from '../../context/context'
import { Link } from 'react-router-dom'


const Deposit = ({ updateBalance }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState(0);
    const ctx = useContext(UserContext)

    const handleDeposit = (e) => {
        e.preventDefault()
        if (amount <= 0) {
            setStatus('Error: Please enter a positive number')
            return
        }
        const new_balance = parseInt(amount) + parseInt(ctx.balance)
        updateBalance(new_balance)
        setShow(false);
    }

    const clearForm = () => {
        setAmount(0)
        setShow(true)
    }

    const validate = (field, label) => {
        if (!field) {
            setStatus(`Error: ${label}`)
            setTimeout(() => setStatus(''), 500);
            return false
        }
        return true
    }

    return (
        <div className="depositContainer">
            {ctx.name ? (
                <Card
                    header="Deposit"
                    status={status}
                    body={show ? (
                        <>
                            Name: {ctx.name}<br />
                            Balance: ${ctx.balance} <br /><br />

                            Amount<br />
                            <input type="input" className="form-control" id="amount"
                                placeholder="Deposit amount" value={amount}
                                onChange={e => setAmount(e.currentTarget.value)} /><br />

                            <button type="submit" className="btn btn-light" onClick={handleDeposit}>
                                Deposit
                            </button>
                        </>
                    ) : (
                        <>
                            <h5>Success</h5>
                            <div>New balance: {ctx.balance}</div>
                            <button type="submit" className="btn btn-light"
                                onClick={clearForm}>Another deposit</button>
                        </>
                    )}
                />
            ) : (
                <Card
                    header="Please create an account"
                    status={status}
                    body={<><Link to="/create">Create an account</Link></>} />
            )}
        </div>
    )
}


export default Deposit
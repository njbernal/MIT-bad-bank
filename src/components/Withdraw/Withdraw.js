import { useContext, useState, useEffect } from 'react'
import { UserContext, Card } from '../../context/context'
import { Link } from 'react-router-dom'


const Withdraw = ({ updateBalance }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState('');
    const ctx = useContext(UserContext)

    const handleWithdraw = (e) => {
        e.preventDefault()
        if (amount > ctx.balance) {
            setStatus('Error: Insufficient Funds')
            return
        } else if (amount <= 0) {
            setStatus('Error: Please enter a positive number')
            return
        }
        const new_balance = ctx.balance - amount
        updateBalance(new_balance, "Withdrawal", amount)
        setShow(false);
    }

    const clearForm = () => {
        setAmount('')
        setShow(true)
    }

    const validate = (field, label) => {
        if (!field) {
            setStatus(`Error: ${label}`)
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        return true
    }

    useEffect(() => {
        if (ctx.name) {
            const btn = document.getElementById('submitButton')
            const condition_disable = amount
            if (condition_disable) btn.removeAttribute('disabled', '')
            else btn.setAttribute('disabled', '')
        }
    }, [amount])

    return (
        <div className="depositContainer">
            {ctx.name ? (
                <Card
                    header="Withdraw"
                    body={
                        show ? (
                            <>
                                <div className="create-account-error" id="error">{status}</div>
                                <div><span>Name:</span> <strong>{ctx.name}</strong></div>
                                <div><span>Balance:</span> <strong>${ctx.balance}</strong></div>
                                <hr />

                                <label htmlFor="amount">Withdrawal Amount: </label>
                                <input type="number" className="form-control" id="amount"
                                    placeholder="Deposit amount" value={amount}
                                    onChange={e => setAmount(e.currentTarget.value)} /><br />

                                <button type="submit" id="submitButton" className="btn btn-light" onClick={handleWithdraw}>
                                    Withdraw
                                </button>
                            </>
                        ) : (
                            <>
                                <h5>Success</h5>
                                <div>New balance: ${ctx.balance}</div>
                                <hr />
                                <button type="submit" className="btn btn-light"
                                    onClick={clearForm}>Another withdrawal</button>
                            </>
                        )}
                />
            ) : (
                <Card
                    header="Please create an account"
                    status={status}
                    body={<><Link to="/create">Create an account</Link></>} />
            )
            }
        </div>
    )

}
export default Withdraw
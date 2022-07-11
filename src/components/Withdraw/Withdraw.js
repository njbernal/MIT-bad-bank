import { useContext, useState } from 'react'
import { UserContext, Card } from '../../context/context'
import { Link } from 'react-router-dom'


const Withdraw = ({ updateBalance }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState(0);
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
                    header="Withdraw"
                    status={status}
                    body={
                        show ? (
                            <>
                                Name: {ctx.name} <br />
                                Balance: ${ctx.balance} <br /><br />

                                Amount < br />
                                <input type="input" className="form-control" id="amount"
                                    placeholder="Withdraw amount" value={amount}
                                    onChange={e => setAmount(e.currentTarget.value)} /><br />

                                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>
                                    Withdraw
                                </button>
                            </>
                        ) : (
                            <>
                                <h5>Success</h5>
                                <div>New balance: ${ctx.balance}</div>
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
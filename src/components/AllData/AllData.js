import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, UserContext } from '../../context/context'

const AllData = () => {
    const ctx = useContext(UserContext)
    return (
        <div>
            {ctx.name ? (
                <Card
                    header="User Data"
                    status=""
                    body={
                        <>
                            <div className="user-info-container">
                                Name: {ctx.name} <br />
                                Email: {ctx.email} <br />
                                Password: {ctx.password} <br />
                                Balance: {ctx.balance} <br />
                            </div>
                            <hr />
                            <div className="transaction-history">
                                <p><strong>Transactions:</strong></p>
                                {
                                    ctx.transactions.map((item, index) => <div key={index}>{item.transaction}: ${item.amount}</div>)
                                }
                            </div>
                            <hr />
                            <div className="balance">
                                <strong>Balance:</strong> ${ctx.balance}
                            </div>
                        </>
                    } />
            ) : (
                <Card
                    header="Please create an account"
                    status=''
                    body={<><Link to="/create">Create an account</Link></>} />
            )}
        </div >
    )
}
export default AllData
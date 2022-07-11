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
                            Name: {ctx.name} <br />
                            Email: {ctx.name} <br />
                            Password: {ctx.name} <br />
                            Balance: {ctx.balance} <br />
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
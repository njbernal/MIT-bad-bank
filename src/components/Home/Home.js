import { useContext } from 'react'
import { UserContext, Card } from '../../context/context'
import { Link } from 'react-router-dom'

const Home = () => {
    const ctx = useContext(UserContext)

    const body = () => {
        if (ctx.name) return (<>Hello {ctx.name}</>)
        else return "Please create an account to begin."
    }
    return (
        <Card
            txtcolor="black"
            header="Bad Bank"
            title={body()}
            body={(
                <>
                    <img src='images/dollars.png' alt='Bundle of dollar bills from freepngimg.com' />
                    <hr />
                    <p>Welcome to the Bad Bank</p>
                    <Link as={Link} eventKey="create" to="/create">Create an account.</Link>
                </>
            )
            }
        />
    )
}
export default Home
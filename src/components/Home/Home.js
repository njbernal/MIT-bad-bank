import { useContext } from 'react'
import { UserContext, Card } from '../../context/context'

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
            body="Welcome to the bank."
        />
    )
}
export default Home
import { useContext } from 'react'
import { UserContext, Card } from '../../context/context'

const Home = () => {
    const ctx = useContext(UserContext)
    return (
        <Card
            txtcolor="black"
            header="Bad Bank Home"
            title="Welcome to Bad Bank"
            text="You can use this bank"
            body={
                (<img src="bank.png" className="img-fluid" alt="Responsive Image" />)
            }
        />
    )
}
export default Home
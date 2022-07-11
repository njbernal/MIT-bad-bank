import { Navbar, Nav, Container } from 'react-bootstrap'
import './Nav.css'

const Navigation = ({ handleNav }) => {
    // TODO: Add hover effect to link

    const handleClick = (e) => {
        const item = e.target;
        console.log(item)
        console.log(item.classList)
    }
    return (
        <div className="nav-container">
            <Nav variant="pills" defaultActiveKey="#/" className="me-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#/create">Create Account</Nav.Link>
                <Nav.Link href="#/deposit">Deposit</Nav.Link>
                <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
                <Nav.Link href="#/all">All</Nav.Link>
            </Nav >
        </div>
    )
}
export default Navigation
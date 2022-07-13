import { Navbar, Nav, Container } from 'react-bootstrap'
import './Nav.css'

const Navigation = ({ handleNav, status }) => {

    return (
        <div className="nav-container">
            <Nav variant="pills" defaultActiveKey="home" className="me-auto">
                <Nav.Link eventKey="home" href="#/">Home</Nav.Link>
                <Nav.Link eventKey="create" href="#/create">Create Account</Nav.Link>
                <Nav.Link eventKey="deposit" href="#/deposit">Deposit</Nav.Link>
                <Nav.Link eventKey="withdraw" href="#/withdraw">Withdraw</Nav.Link>
                <Nav.Link eventKey="all" href="#/all">All</Nav.Link>
            </Nav >
        </div>
    )
}
export default Navigation
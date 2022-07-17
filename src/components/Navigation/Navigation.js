import { Navbar, Nav, Container } from 'react-bootstrap'
import './Nav.css'

const Navigation = ({ handleNav, status }) => {

    return (
        <div className="nav-container">
            <Nav variant="pills" defaultActiveKey="home" className="me-auto">
                <Nav.Link id="/" eventKey="home" href="#/">Home</Nav.Link>
                <Nav.Link id="/create" eventKey="create" href="#/create">Create Account</Nav.Link>
                <Nav.Link id="/deposit" eventKey="deposit" href="#/deposit">Deposit</Nav.Link>
                <Nav.Link id="/withdraw" eventKey="withdraw" href="#/withdraw">Withdraw</Nav.Link>
                <Nav.Link id="/all" eventKey="all" href="#/all">All</Nav.Link>
            </Nav >
        </div>
    )
}
export default Navigation
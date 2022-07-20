import { Navbar, Nav, Container, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Nav.css'

const Navigation = ({ handleNav, status }) => {
    const [active, setActive] = useState('home');
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname.split('/')[1])
    }, [location.pathname]);

    return (
        <div className="nav-container">
            <Nav variant="pills" defaultActiveKey="home" className="me-auto sub-nav"
                activeKey={active}
                onSelect={(selectedKey) => setActive(selectedKey)}>
                <Nav.Link as={Link} eventKey="home" to="/">Home</Nav.Link>
                <Nav.Link as={Link} eventKey="create" to="/create">Create</Nav.Link>
                <Nav.Link as={Link} eventKey="deposit" to="/deposit">Deposit</Nav.Link>
                <Nav.Link as={Link} eventKey="withdraw" to="/withdraw">Withdraw</Nav.Link>
                <Nav.Link as={Link} eventKey="all" to="/all">All</Nav.Link>
            </Nav >
        </div>
    )
}
export default Navigation
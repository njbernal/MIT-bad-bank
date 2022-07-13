import { useEffect, useState } from 'react'
import { Route, Routes, HashRouter as Router } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home'
import Deposit from '../Deposit/Deposit'
import Withdraw from '../Withdraw/Withdraw'
import AllData from '../AllData/AllData'
import CreateAccount from '../CreateAccount/CreateAccount'
import { UserContext } from '../../context/context'

import './App.css'


const App = () => {
    // const [users, setUsers] = useState(USERS)
    const [context, setContext] = useState({
        name: '', email: '', password: '', balance: 0, transactions: []
    })
    const [history, setHistory] = useState([])

    const updateBalance = (balance, transaction, amount) => {
        const transactions = context.transactions
        transactions.push({ transaction, amount })
        console.log(transactions)
        const new_context = { ...context, balance, transactions }
        setContext(new_context);
    }

    const updateUser = (user) => {
        setContext(user);
    }

    return (
        <div className="app-container">
            <Navigation />
            <div className="content-container">
                <Router>
                    <UserContext.Provider value={context}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/create" element={<CreateAccount updateUser={updateUser} />} />
                            <Route path="/deposit" element={<Deposit updateBalance={updateBalance} />} />
                            <Route path="/withdraw" element={<Withdraw updateBalance={updateBalance} />} />
                            <Route path="/all" element={<AllData />} />
                        </Routes>
                    </UserContext.Provider>
                </Router>
            </div>
        </div >
    )
}

export default App
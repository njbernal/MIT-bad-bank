import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

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
        const new_context = { ...context, balance, transactions }
        setContext(new_context);
    }

    const updateUser = (user) => {
        setContext(user);
    }

    return (
        <UserContext.Provider value={context}>
            <div className="app-container">
                <Navigation />
                <div className="content-container">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/create" element={<CreateAccount updateUser={updateUser} />} />
                        <Route path="/deposit" element={<Deposit updateBalance={updateBalance} />} />
                        <Route path="/withdraw" element={<Withdraw updateBalance={updateBalance} />} />
                        <Route path="/all" element={<AllData />} />
                    </Routes>
                </div>
            </div >
        </UserContext.Provider>
    )
}

export default App
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Deposit from '../Deposit/Deposit'
import Login from '../Login/Login'
import Withdraw from '../Withdraw/Withdraw'
import AllData from '../AllData/AllData'
import CreateAccount from '../CreateAccount/CreateAccount'
import { UserContext } from '../../context/context'

const USERS = {
    users: [
        {
            name: 'Nick',
            email: 'nick@gmail.com',
            password: 'secret',
            balance: 500
        },
        {
            name: 'Joe',
            email: 'joe@gmail.com',
            password: 'secret',
            balance: 200
        },
        {
            name: 'Carly',
            email: 'carly@gmail.com',
            password: 'secret',
            balance: 100
        }
    ]
}

const App = () => {
    const [users, setUsers] = useState(USERS)
    return (
        <div className="app-container">
            <Nav />
            <div className="content-container">
                <UserContext.Provider value={users}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create/" element={<CreateAccount />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/deposit" element={<Deposit />} />
                        <Route path="/withdraw" element={<Withdraw />} />
                        <Route path="/all" element={<AllData />} />
                    </Routes>
                </UserContext.Provider>
            </div>
        </div >
    )
}

export default App
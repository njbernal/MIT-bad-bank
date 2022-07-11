import { useState, useContext, useEffect } from 'react'
import { UserContext, Card } from '../../context/context'
import { Link } from 'react-router-dom'

const CreateAccount = ({ updateUser }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext)

    const handleCreate = () => {
        if (!validate(name, 'name')) return
        if (!validate(password, 'password')) return
        if (!validate(show, 'show')) return
        const user = { name, email, password, balance: 100 }
        updateUser(user)
        setShow(false);
    }

    const clearForm = () => {
        const user = { name: "", email: "", password: "", balance: 0 }
        updateUser(user);
        setName('')
        setEmail('')
        setPassword('')
        setShow(true)
    }

    const validate = (field, label) => {
        if (!field) {
            setStatus(`Error: ${label}`)
            setTimeout(() => setStatus(''), 500);
            return false
        }
        return true
    }


    useEffect(() => {
        const btn = document.getElementById('createButton')
        const condition_disable = name && email && password
        if (condition_disable) btn.removeAttribute('disabled', '')
        else btn.setAttribute('disabled', '')
    }, [name, email, password])

    return (
        <Card
            header="Create Account"
            status={status}
            body={show ? (
                <>
                    Name<br />
                    <input type="input" className="form-control" id="name"
                        placeholder="Enter Name" value={name}
                        onChange={e => setName(e.currentTarget.value)} /><br />

                    Email<br />
                    <input type="input" className="form-control" id="email"
                        placeholder="Enter email" value={email}
                        onChange={e => setEmail(e.currentTarget.value)} /><br />

                    Password<br />
                    <input type="password" className="form-control" id="password"
                        placeholder="Enter password" value={password}
                        onChange={e => setPassword(e.currentTarget.value)} /><br />

                    <button id="createButton" type="submit" className="btn btn-light" onClick={handleCreate}>
                        CreateAccount
                    </button>
                </>
            ) : (
                <>
                    <h5>Success</h5>
                    <Link to="/deposit">Make a deposit</Link><br />
                    <Link to="/deposit">Make a Withdrawal</Link><br />
                    <Link to="#" onClick={clearForm}>Create new account</Link><br />
                </>
            )}
        />
    )
}

export default CreateAccount
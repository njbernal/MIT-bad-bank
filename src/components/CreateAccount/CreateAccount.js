import { useState, useContext, useEffect } from 'react'
import { UserContext, Card } from '../../context/context'
import { Link } from 'react-router-dom'
import './CreateAccount.css'

const CreateAccount = ({ updateUser }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext)

    const handleCreate = () => {
        if (!validate(name, 'Name')) return
        if (!validate(email, 'Email')) return
        if (!validate(password, 'Password')) return
        if (!validate(show, 'show')) return
        const user = { name, email, password, balance: 100, transactions: [{ transaction: 'Account Created', amount: 100 }] }
        updateUser(user)
        setShow(false);
    }

    const validateEmail = (email) => {
        // Taken from a tutorial from:
        // https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    }

    const checkPassword = (password) => {
        const res = /^[A-Za-z]\w{7,14}$/;
        return res.test((String(password)));
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
        /*
        Validations:
            Name cannot be blank
            Email cannot be blank
            Password cannot be blank
            Email is valid
            Password is 8 characters long
            Password contains valid characters
        */
        if (!field) {
            setStatus(`Error: ${label} cannot be blank.`)
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        else if (!validateEmail(email)) {
            setStatus(`Error: Email is not valid.`)
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        else if (password.length < 8) {
            setStatus(`Error: Password must be at least 8 characters.`);
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        else if (!checkPassword(password)) {
            setStatus(`Error: Password contains invalid characters.`);
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        return true
    }


    useEffect(() => {
        const btn = document.getElementById('createButton')
        const condition_disable = name || email || password
        if (condition_disable) btn.removeAttribute('disabled', '')
        else btn.setAttribute('disabled', '')
    }, [name, email, password])

    return (
        <Card
            header="Create Account"
            body={show ? (
                <>
                    <div className="create-account-error" id="error">{status}</div>
                    <label htmlFor="name" id="start_form">Name</label>
                    <input type="input" className="form-control" id="name"
                        placeholder="Enter Name" value={name}
                        onChange={e => setName(e.currentTarget.value)} /><br />

                    <label htmlFor="email">Email</label>
                    <input type="input" className="form-control" id="email"
                        placeholder="Enter email" value={email}
                        onChange={e => setEmail(e.currentTarget.value)} /><br />

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                        placeholder="Enter password" value={password}
                        onChange={e => setPassword(e.currentTarget.value)} /><br />

                    <button id="createButton" type="submit" className="btn btn-light" onClick={handleCreate}>
                        Submit
                    </button>
                </>
            ) : (
                <>
                    <h5>Success</h5>
                    <>
                        <img src='images/dollars.png' alt='Bundle of dollar bills from freepngimg.com' />
                        <hr />
                        <p>Welcome to the Bad Bank</p>
                    </>
                    <Link to="/deposit">Make a deposit</Link><br />
                    <Link to="/deposit">Make a Withdrawal</Link><br />
                    <Link to="#" onClick={clearForm}>Create new account</Link><br />
                </>
            )}
        />
    )
}

export default CreateAccount
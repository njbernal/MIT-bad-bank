import { useState, useContext } from 'react'
import { UserContext, Card } from '../../context/context'

const CreateAccount = () => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext)

    const handleCreate = () => {
        console.log(name, email, password)
        if (!validate(name, 'name')) return
        if (!validate(password, 'password')) return
        if (!validate(show, 'show')) return
        ctx.users.push({ name, email, password, balance: 100 })
        setShow(false);
    }

    const clearForm = () => {
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

                    <button type="submit" className="btn btn-light" onClick={handleCreate}>
                        CreateAccount
                    </button>
                </>
            ) : (
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light"
                        onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    )
}

export default CreateAccount
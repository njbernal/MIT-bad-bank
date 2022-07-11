import { useState } from 'react'
import { Card } from '../../context/context'

const Login = () => {
    const [deposit, setDeposit] = useState('');
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, showStatus] = useState('');

    const clearForm = () => {
        setEmail('')
        setPassword('')
        setShow(true)
    }

    const handleLogin = () => {
        setShow(false);
    }

    return (
        <Card
            header="Login"
            status={status}
            body={show ? (
                <>
                    Email<br />
                    <input type="input" className="form-control" id="email"
                        placeholder="Enter email" value={email}
                        onChange={e => setEmail(e.currentTarget.value)} /><br />

                    Password<br />
                    <input type="password" className="form-control" id="password"
                        placeholder="Enter password" value={password}
                        onChange={e => setPassword(e.currentTarget.value)} /><br />

                    <button type="submit" className="btn btn-light" onClick={handleLogin}>
                        Login
                    </button>
                </>
            ) : (
                <>
                    <h5>Success</h5>
                </>
            )}
        />
    )
}

export default Login
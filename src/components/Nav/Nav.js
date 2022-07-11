const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#/">Bad Bank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#/create" className="nav-link">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a href="#/deposit" className="nav-link">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a href="#/withdraw" className="nav-link">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a href="#/all" className="nav-link">All Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Nav
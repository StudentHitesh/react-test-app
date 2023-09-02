import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav">
                        <Link to='/' className="nav-link" ><li className="nav-item active">
                            Home <span className="sr-only">(current)</span>
                        </li></Link>
                        <Link to='/about' className="nav-link"><li className="nav-item">
                            About
                            </li></Link>
                        <Link to='/contact' className="nav-link"><li className="nav-item">
                            Contact
                            </li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
}

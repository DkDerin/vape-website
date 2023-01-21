import React from 'react'
import logo from "../assets/logo.png";
export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container">
                <a href="#" className="navbar-brand"><img src={logo} alt="fsdfsd" className='logo'/></a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                        <a href="#products" className="nav-link" to="products">OM OSS</a>
                    </li>
                    <li className="nav-item">
                        <a href="#products" className="nav-link" to="products">PRODUKTER</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Våra Samker</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">KONTAKT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav >    
    )
}

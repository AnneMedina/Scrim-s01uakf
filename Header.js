import React from "react"

function Header() {
    return (
        <header>
            <nav className="menu-bar">
                <img src="./react-logo.png" className="menu-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

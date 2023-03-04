import React from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheets/header.css'
const Header = () => {
    return (
        <div >
            <header class="nav_container">
                <nav class="nav">
                    <Link class="active" to={'/'}>Home</Link>
                    <Link to={"/inc"}>search</Link>
                    <Link to={"/data"}>Explore</Link>
                    <Link to={"/netflix"}>Movies</Link>
                    <a href="#news">Web-series</a>
                </nav>
            </header>
        </div>
    )
}

export default Header
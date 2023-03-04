import React from 'react'
import '../StyleSheets/header.css'
const Header = () => {
    return (
        <div >
            <header class="nav_container">
                <nav class="nav">
                    <a class="active" href="/">Home</a>
                    <a href="/inc">search</a>
                    <a href="/data">Explore</a>
                    <a href="/netflix">Movies</a>
                    <a href="#news">Web-series</a>
                </nav>
            </header>
        </div>
    )
}

export default Header
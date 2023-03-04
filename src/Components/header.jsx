import React from 'react'
import '../StyleSheets/header.css'
const Header = () => {
    return (
        <div >
            <header class="nav_container">
                <nav class="nav">
                    <a class="active" href="#home">Home</a>
                    <a href="#news">search</a>
                    <a href="#news">Explore</a>
                    <a href="#news">Movies</a>
                    <a href="#news">Web-series</a>
                </nav>
            </header>
        </div>
    )
}

export default Header
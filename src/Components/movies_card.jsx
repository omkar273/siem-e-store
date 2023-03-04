import React from 'react'
import "./movies_card.css"

function Movies_card(props) {

    return (
        <div className='card'>
            <img src={props.url} alt="" srcset="" />
            <p className='name-holder'>{props.Title}</p>
            <div className='des'>
                <span>{props.Year}</span>
                <span>{props.Runtime}</span>
            </div>
        </div>
    )
}

Movies_card.defaultProps = {
    url: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    Title: "The lion king",
    Year: "1998",
    Runtime: "104min"
}

Movies_card.propTypes = {

}

export default Movies_card
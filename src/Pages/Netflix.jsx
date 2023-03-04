import React from 'react'
import Header from '../Components/header'
import Movies_card from '../Components/movies_card'
import movies from "../JSON Data/movies_data.json"

const Netflix = () => {
    return (
        <div>
            <Header />
            <div className='p-5 flex flex-row gap-4 flex-wrap grow justify-center'>
                {movies.map((element) => {

                    return (<Movies_card url={element.Poster}
                        Title={element.Title}
                        Year={element.Year}
                        Runtime={element.Runtime} />)
                })}
            </div>
        </div>
    )
}

export default Netflix
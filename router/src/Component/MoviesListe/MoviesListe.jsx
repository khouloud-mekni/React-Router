import React from 'react'
import MovieCard from '../MoviesCard/MoviesCard'
import "./MoviesListe.css"

function MoviesListe({data, titleSearch , ratingSearch }) {


    return (
        <div className='myListe'>
        {data
        .filter(movie=>movie.title.toLowerCase().includes(titleSearch)&& movie.rating>=ratingSearch)
        .map ((movie,index)=><MovieCard movie={movie} key={index}/>)}

        </div>
    )
}

export default MoviesListe
import React,{useState,useEffect} from 'react'
import MoviesData from '../MoviesData/MoviesData'
import {useParams,useHistory} from 'react-router-dom'
import {Button} from "react-bootstrap"
import './MovieDetails.css'
const MovieDetails = () => {
    const [movie,setMovie]=useState({})
    let {id}= useParams()
    useEffect(()=>{
        setMovie(MoviesData.find(movie=>movie.id === id))
    })
    let history = useHistory()
    return (
        
        <div>
            <h1>{movie.title}</h1>
            <iframe
            width="560" height="315" 
            src={movie.trailer}
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <h3>{movie.description}</h3>
            <Button variant="outline-warning" onClick ={()=>history.push("/")}>Back To Home </Button>
        </div>
    )
}

export default MovieDetails

import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function MovieCard({movie}) {
console.log(movie)
    return (
        <div>
<Card style={{ width: '18rem' , color:'white', backgroundColor:"black" }}>
<Card.Img variant="top" src={movie.posterUrl} style={{ width: '18rem' ,height:'18rem', boderRadius:"20%" }} alt="logo"  />
<Card.Body>
<Card.Title>{movie.title}</Card.Title>
<Card.Text style={{height:'1rem'}}>{movie.description}</Card.Text>
</Card.Body>
<h3>{"⭐".repeat(movie.rating)}</h3>
<Link to={`/details/${movie.id}`}>   
<Button variant="outline-warning"style={{marginBottom:"10rem"}}>See Trailer</Button>
</Link>
</Card>

        </div>
    )
}

export default MovieCard
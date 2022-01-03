import React from 'react'
import {Nav,Navbar,FormControl,Container} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


function MyNav({handleTitle , handleStar}) {
    const ratingChanged = (newRating) => {
    handleStar =(newRating);
        console.log(newRating);
    };

    const handleChange =(e)=>{
    handleTitle(e.target.value)
        };


    return (
        <div>
            <Navbar bg="outline-warning" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{color:"gold" }} > <h1>Netflix</h1> </Navbar.Brand>
    <Nav className="me-auto">
    
    </Nav>
    <FormControl style={{width:"70%"}} type="search"
    placeholder="type your search here"
    onChange={handleChange}

    />


    </Container>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={40}
    activeColor="#ffd700"
/>

</Navbar>

        </div>
    )
}

export default MyNav
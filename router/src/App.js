import React, { useState } from 'react'
import MyNav from './Component/Nav/MyNav'
import MoviesData from './Component/MoviesData/MoviesData'
import MoviesListe from './Component/MoviesListe/MoviesListe'
import './App.css'
import AddMovie from './Component/AddMovie/AddMovie'
import {Route, Switch} from 'react-router-dom';
import MovieDetails from './Component/MovieDetails/MovieDetails'



function App() {



  const [titleSearch,setTitleSearch]=useState('')
  const handleTitle=(input)=>{
  setTitleSearch(input)

  };


  const [ratingSearch,setRatingSearch]=useState(0)
  const handleStar=(input)=>{
    setRatingSearch (input)


  }

  const [data,setData]= useState(MoviesData)

const getData = (input)=>{
  setData([...data, input]);


}


  return (
    <div className="App">
      <Switch> 
        <Route exact path="/">  

          <MyNav
            handleTitle={handleTitle}
            handleStar={handleStar}/>

          <AddMovie getData={getData}/>

          <MoviesListe

            titleSearch={titleSearch}
            ratingSearch={ratingSearch}
            data={data}
          />
        </Route >
        <Route path="/details/:id" component={MovieDetails} />
      </Switch>
    </div>
  )
}

export default App
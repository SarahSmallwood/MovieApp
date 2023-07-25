import React from 'react'

function MovieDisplay(props) {
    const loaded = () => {
        return <h1>  </h1>
    }
    const loading = () => {
        return <h1> </h1>
    } 
  return movie? loaded() : loading() ;
        <div>
        <h1> {props.movie.Title} </h1>
        <h1> {props.movie.Year} </h1>
        <h1> {props.movie.Rated} </h1>
        <hr/>
        <img src={props.movie.Poster}/>
        <h3> {props.movie.Actors} </h3>
        <hr/>


    </div>
}

export default MovieDisplay
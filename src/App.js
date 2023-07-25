
import './App.css';
import {useState, useEffect} from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import React from 'react';

function App() {
  const apiKey= " 9aa1fc23"

    const [movie, setMovie] = useState("")

    const getMovie = async(searchTerm) => {
        const response = await fetch(`https://omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
        const data = await response.json()

        setMovie(data)

    }; 
    useEffect(() => {
      getMovie(movie)
    }, []);


    //function that uses async-await to fetch movie data


  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      
      
      
      
      <MovieDisplay movie={movie} />



    </div>
  );
};

export default App;

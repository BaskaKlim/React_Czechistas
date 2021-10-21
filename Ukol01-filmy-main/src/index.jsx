import React from 'react';
import { render } from 'react-dom';
import './style.css';


import MovieList from './components/MovieList'; 
import Header from './components/Header'; 
import movies from './movies.js';

 
const App = () => (
  <>
    <Header className="header"/>
    <MovieList className="movieList" movies={movies} key={movies.id}/>
  </>
);

render(<App />, document.querySelector('#app'));

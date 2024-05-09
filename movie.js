"use strict";

let favoritemovies = [
"Diary of a Wimpy Kid",
"Charlies Angels", 
"Monster House", ]

function displayTopMovies(_movie){
    console.log(`My favorite 4 movies are ${_movie[2]}, ${_movie[1]} and ${_movie[0]} `)
 };

 displayTopMovies(favoritemovies);

 favoritemovies.forEach(movie =>{
    console.log(`You should watch ${movie}`)
 });
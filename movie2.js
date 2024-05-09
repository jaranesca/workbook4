"use strict";

let favoriteMovies=[
    {
    movieTitle:"The Hot Chick",
    reason:" Super nostalgic and hilarious plus I love everything with Rob in it.",
    movieUrl:"https://m.media-amazon.com/images/I/710cn5qOtuL._AC_UF1000,1000_QL80_.jpg"
    },
    {
    movieTitle:"Charlie's Angel's",
    reason:"Action-packed with a kick-butt female ensemble, it's a stylish thrill ride for fans of high-octane adventures.",
    movieUrl:"https://m.media-amazon.com/images/I/519LHaAtncL._AC_UF894,1000_QL80_DpWeblab_.jpg"
    },
    {
    movieTitle:"Charlie's Angel's: Full Throttle",
    reason:"Bigger, bolder, and outrageously fun, it's packed with jaw-dropping stunts and a killer soundtrack, perfect for thrill-seekers.",
    movieUrl:"https://www.picclickimg.com/sD0AAOSwaSpiizje/Charlies-Angels-Full-Throttle-Dvd-Collector-s-Edition-Region.webp"
    }
]

    console.log(`My favorite movies are ${favoriteMovies[0].movieTitle}, ${favoriteMovies[1].movieTitle} and ${favoriteMovies[2].movieTitle}`)

    function randomMovieRecommendation() {
        const randomIndex = Math.floor(Math.random() * favoriteMovies.length);

        const randomMovie = favoriteMovies[randomIndex];

        console.log(`You should watch "${randomMovie.movieTitle}" because it is ${randomMovie.reason}. Movie URL: ${randomMovie.movieUrl}`);
    }
    randomMovieRecommendation();
    
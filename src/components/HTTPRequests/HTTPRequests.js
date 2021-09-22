import { useState } from "react";
import MoviesList from "./MoviesList";

const divStyle = {
  color: "teal",
  border: "1px solid brown",
  margin: 10,
};

const HTTPRequest = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchMoviesHandler = () => {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // };

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  };

  return (
    <div style={divStyle}>
      <p>HTTPRequests</p>
      <p>Some stuff</p>
      <button onClick={fetchMoviesHandler}>Fetch movies</button>
      {!isLoading && movies.length > 0 && (
        <MoviesList movies={movies}></MoviesList>
      )}
      {!isLoading && movies.length === 0 && <p>Found no movies</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default HTTPRequest;

import { useState, useEffect, useCallback } from "react";
import MoviesList from "./MoviesList";

const divStyle = {
  color: "teal",
  border: "1px solid brown",
  margin: 10,
};

const HTTPRequest = () => {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usersIsLoading, setUsersIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usersError, setUsersError] = useState(null);

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
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film");
      // fyi axios will throw an error for error codes, fetch api will not, so we have to configure error handling ourselves
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // this response check might need to be done after converting to json, it really depends on the API you're working with and how they return data
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const fetchUsersHandler = useCallback(async () => {
    setUsersIsLoading(true);
    setUsersError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong with users!");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setUsersError(error.message);
    }
    setUsersIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);
  // if you just have the pointer to the handler in the dependencies array and nothing else, the handler will only run when the component is rendered for the first time
  // it's not mandatory (React does some JS hoisting wizardry I don't care to learn about) to have the pointer to the handler in the dependencies array but it's good practice, because it is a dependency - But for this to work we need to wrap the handler with useCallback, the useCallback method also takes a second arg in the form of a dependencies array, so don't forgot that, or else you'll have an infinite loop

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  let usersContent = <p>Found no users</p>;
  if (users.length > 0) {
    usersContent = (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {/* syntax is weird for JSX, after the arrow you have parentheses () instead of braces {} lke you have with arrow functions */}
      </ul>
    );
  }
  if (usersError) {
    usersContent = <p>{usersError}</p>;
  }
  if (usersIsLoading) {
    usersContent = <p>Loading...</p>;
  }

  return (
    <div style={divStyle}>
      <p>HTTPRequests</p>
      <p>Some stuff</p>
      <button onClick={fetchMoviesHandler}>Fetch movies</button>
      {content}
      {usersContent}
    </div>
  );
};

export default HTTPRequest;

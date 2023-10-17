import ErrorMessage from 'components/Home/ErrorMessage';
import Loader from 'components/Home/Loader';
import MoviesList from 'components/Home/MoviesList';
import { fetchTrendigMovies } from 'components/services/api-movies';

import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        const moviesApi = await fetchTrendigMovies();
        setMovies(moviesApi);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <MoviesList title={'Trending films'} movies={movies} />
    </>
  );
};

export default HomePage;

import ErrorMessage from 'components/Home/ErrorMessage';
import Loader from 'components/Home/Loader';
import MoviesList from 'components/Home/MoviesList';
import { fetchSearchMovie } from 'components/services/api-movies';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Details.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getSearchMovie = async () => {
      try {
        setIsLoading(true);
        const searchMoviesApi = await fetchSearchMovie(query);
        setMovies(searchMoviesApi);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMovie();
  }, [query]);

  const handleSearchSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchInpurt.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <form className={css.form} onSubmit={handleSearchSubmit}>
        <label className={css.lebel}>
          <input
            className={css.input}
            type="text"
            name="searchInpurt"
            required
          />
        </label>
        <button className={css.formBtn} type="submit">
          Search
        </button>
      </form>
      {movies !== null && (
        <MoviesList title={'Searched films'} movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;

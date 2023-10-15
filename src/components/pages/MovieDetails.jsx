import React, { useEffect, useState } from 'react';
import css from './Details.module.css';
import { Link, Route, Routes, useParams } from 'react-router-dom';

import { fetchMoviesDetails } from 'components/services/api-movies';
import Loader from 'components/Home/Loader';
import ErrorMessage from 'components/Home/ErrorMessage';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getfetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const filmData = await fetchMoviesDetails(movieId);
        setMovieData(filmData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getfetchMoviesDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {movieData !== null && (
        <div className={css.detailsContainer}>
          <img
            className={css.detailsImg}
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt=""
          />
          <div className={css.detailsContainerDesc}>
            <h2 className={css.detailsTitle}>{movieData.original_title}</h2>
            <p className={css.detailsTexst}>
              User Score: {movieData.vote_average}
            </p>
            <h2 className={css.detailsSecondTitle}>Overview</h2>
            <p className={css.detailsTexst}>{movieData.overview}</p>
            <h2 className={css.detailsSecondTitle}>Genres</h2>

            <p className={css.detailsTexst}>
              {movieData.genres.map(genre => (
                <span key={genre.name}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
      )}
      <Link className={css.castLink} to="cast">
        Cast
      </Link>
      <Link className={css.reviewsLink} to="reviews">
        Reviews
      </Link>
      <div>
        <Routes>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetails;

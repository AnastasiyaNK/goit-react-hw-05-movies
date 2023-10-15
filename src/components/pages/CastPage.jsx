import ErrorMessage from 'components/Home/ErrorMessage';
import Loader from 'components/Home/Loader';
import { fetchCast } from 'components/services/api-movies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Details.module.css';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getfetchCast = async () => {
      try {
        setIsLoading(true);
        const castApi = await fetchCast(movieId);
        setCast(castApi);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getfetchCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {cast !== null && (
        <ul className={css.castList}>
          {cast.map(actor => (
            <li className={css.castItem} key={actor.id}>
              <img
                className={css.castImg}
                width={180}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.original_name}
              />
              <h3 className={css.castTitle}>{actor.original_name}</h3>
              <p className={css.castText}>Character:{actor.character}</p>
            </li>
          ))}
          <li></li>
        </ul>
      )}
    </div>
  );
};

export default CastPage;

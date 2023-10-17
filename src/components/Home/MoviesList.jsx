import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const MoviesList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <div>
      <h2 className={css.mainTitlePages}>{title}</h2>
      <ul className={css.moviesHomeList}>
        {movies?.map(({ title, id, poster_path }) => {
          return (
            <li className={css.moviesHomeItem} key={id}>
              <Link
                state={{ from: location }}
                className={css.moviesTitleLink}
                to={`/movies/${id}`}
              >
                <img
                  className={css.poster}
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <h3 className={css.moviesTitleList}>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;

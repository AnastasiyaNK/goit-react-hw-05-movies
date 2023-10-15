import React from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesHomeList}>
      {movies?.map(({ title, id, poster_path }) => {
        return (
          <li className={css.moviesHomeItem} key={id}>
            <Link className={css.moviesTitleLink} to={`/movies/${id}`}>
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
  );
};

export default MoviesList;

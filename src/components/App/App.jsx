import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import css from './App.module.css';
import MovieDetails from 'components/pages/MovieDetails';

export const App = () => {
  return (
    <>
      <header className={css.headerContainer}>
        <nav className={css.headerNav}>
          <NavLink
            className={({ isActive }) =>
              `${css['homeLink']} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css['homeLink']} ${isActive ? css.active : ''}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

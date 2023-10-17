import React, { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import css from './App.module.css';
import { Suspense } from 'react';
import Loader from 'components/Home/Loader';
import NotFoundPage from 'components/pages/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetails = lazy(() => import('components/pages/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

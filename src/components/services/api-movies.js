import axios from 'axios';

const API_KEY = '0193a370159edfae9db09ee9047c9984';

export const fetchTrendigMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=0193a370159edfae9db09ee9047c9984'
  );
  console.log(data);

  return data.results;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};

export const fetchMoviesDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=0193a370159edfae9db09ee9047c9984`
  );

  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0193a370159edfae9db09ee9047c9984`
  );

  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0193a370159edfae9db09ee9047c9984`
  );
  return data.results;
};

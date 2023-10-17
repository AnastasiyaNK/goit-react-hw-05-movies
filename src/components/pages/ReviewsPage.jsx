import ErrorMessage from 'components/Home/ErrorMessage';
import Loader from 'components/Home/Loader';
import { fetchReviews } from 'components/services/api-movies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Details.module.css';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getfetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviesApi = await fetchReviews(movieId);
        setReviews(reviesApi);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getfetchReviews();
  }, [movieId]);

  useEffect(() => {
    if (!reviews) return;
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }, [reviews]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {reviews !== null && (
        <ul className={css.reviewsList}>
          {reviews.map(review => (
            <li className={css.reviewsItem} key={review.id}>
              <h3 className={css.reviewsTitle}>{review.author}</h3>
              <p className={css.reviewsText}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsPage;

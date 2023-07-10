'use client';

import { useState, useEffect } from 'react';
import { TReviewsProps } from '@/types/apiResponseTypes';
import { getReviewsFromApi } from '@/actions/getReviewsFromApi';
import ReviewItem from './ReviewItem';

const ReviewsList = () => {
  const [reviews, setReviews] = useState<TReviewsProps[] | []>([]);

  useEffect(() => {
    (async () => {
      const reviews: TReviewsProps[] = await getReviewsFromApi();
      setReviews(reviews);
    })();
  }, []);

  return (
    <ul>
      {reviews?.map((review) => (
        <ReviewItem key={review.author_name} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;

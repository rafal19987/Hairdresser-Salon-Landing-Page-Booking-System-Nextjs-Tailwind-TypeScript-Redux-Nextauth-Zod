'use client';

import { useState, useEffect } from 'react';
import { TReviewsProps } from '@/types/apiResponseTypes';
import { getReviewsFromApi } from '@/actions/getReviewsFromApi';
import Review from './Review';
import ReviewSkeleton from './ReviewSkeleton';

const ReviewsList = () => {
  const [reviews, setReviews] = useState<TReviewsProps[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    const cachedReviews = localStorage.getItem('cachedReviews');

    if (cachedReviews) {
      setReviews(JSON.parse(cachedReviews));
      setIsLoading(false);
    }

    const reviews = await getReviewsFromApi();
    setReviews(reviews);
    localStorage.setItem('cachedReviews', JSON.stringify(reviews));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (isLoading)
    return (
      <div>
        <ReviewSkeleton />
        <ReviewSkeleton />
      </div>
    );

  return (
    <ul className="w-full">
      {reviews?.map((review) => (
        <Review key={review.author_name} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;

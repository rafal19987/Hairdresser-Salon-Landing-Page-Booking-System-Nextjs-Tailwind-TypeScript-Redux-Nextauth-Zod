'use client';

import { useState, useEffect } from 'react';
import { TReviewsProps } from '@/types/apiResponseTypes';
import { getReviewsFromApi } from '@/actions/getReviewsFromApi';
import ReviewItem from './ReviewItem';
import ReviewItemSkeleton from './ReviewItemSkeleton';

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
        <ReviewItemSkeleton />
        <ReviewItemSkeleton />
      </div>
    );

  return (
    <ul className="w-full">
      {reviews?.map((review) => (
        <ReviewItem key={review.author_name} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;

'use client';

import { useState, useEffect } from 'react';
import { TReviewsProps } from '@/types/apiResponseTypes';
import Review from './Review';
import ReviewSkeleton from './ReviewSkeleton';

const ReviewsList = () => {
  const [reviews, setReviews] = useState<TReviewsProps[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FETCH_API_URL}/reviews`,
        {
          next: { revalidate: 3600 },
          cache: 'force-cache',
        }
      );
      const data = await res.json();
      console.log(data);
      setReviews(data);
      setIsLoading(false);
    };
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

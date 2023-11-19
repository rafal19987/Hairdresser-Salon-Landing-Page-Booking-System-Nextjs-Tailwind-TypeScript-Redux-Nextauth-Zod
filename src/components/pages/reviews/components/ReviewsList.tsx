'use client';

import { useState, useEffect } from 'react';
import { TReviewsProps } from '@/types/apiResponseTypes';
import Review from './Review';
import ReviewSkeleton from './ReviewSkeleton';
import { fakeReviews } from '@/helpers/constants/fakeReviews';

const ReviewsList = () => {
  const [reviews, setReviews] = useState<TReviewsProps[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_FETCH_API_URL}/reviews`,
          {
            next: { revalidate: 3600 },
            cache: 'force-cache',
          },
        );
        const data = await res.json();

        if (Object.keys(data).length < 1) throw 'Ups, something went wrong.';

        setReviews(data);
      } catch (error) {
        console.log(error);
        console.log('Now we will return fakeRevies data');
        setReviews(fakeReviews);
      } finally {
        setIsLoading(false);
      }
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
    <ul className='w-full'>
      {reviews?.map((review) => (
        <Review key={review.author_name} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;

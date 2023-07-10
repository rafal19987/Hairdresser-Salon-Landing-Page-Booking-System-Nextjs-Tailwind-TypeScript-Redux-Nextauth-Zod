'use client';

import { useState, useEffect } from 'react';
import { TReviewsProps } from '@/types/apiResponseTypes';
import { getReviewsFromApi } from '@/actions/getReviewsFromApi';
import ReviewItem from './ReviewItem';

const ReviewsList = () => {
  const [reviews, setReviews] = useState<TReviewsProps[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const reviews: TReviewsProps[] = await getReviewsFromApi();
      setReviews(reviews);
      setIsLoading(false);
    })();
  }, []);

  return (
    <ul>
      {isLoading && (
        <>
          <li>
            <div className="relative flex flex-col h-48 mx-8 my-14 py-4 gap-4 bg-[#424242] rounded-[20px] animate-pulse">
              <div className="absolute -top-8 text-xl">Wczytywanie...</div>
              <div className="absolute -right-4 -top-8 max-[295px]:hidden w-16 h-16 rounded-full bg-slate-400"></div>
            </div>
          </li>
        </>
      )}
      {reviews?.map((review) => (
        <ReviewItem key={review.author_name} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;

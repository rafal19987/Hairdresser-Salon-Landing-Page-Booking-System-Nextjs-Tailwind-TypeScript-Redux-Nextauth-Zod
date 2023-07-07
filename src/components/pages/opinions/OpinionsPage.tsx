'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import starIcon from '@/assets/star-icon.svg';

const OpinionsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch('http://localhost:3000/api');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, []);

  return (
    <div>
      <h2 className="relative w-fit  mx-8 mt-8 text-xl ">
        Opinie naszych klientów
        <div className="absolute -bottom-4 w-full h-3 bg-[var(--gold)]" />
        <div className="absolute -bottom-[98px] -left-[82px] w-44 h-3 bg-[var(--gold)] rotate-90" />
      </h2>

      <section>
        <ul>
          {reviews?.map((review: any) => (
            <li
              className="relative flex flex-col mx-14 my-14 py-4 gap-4 bg-[#424242] rounded-[20px]"
              key={review.author_name}
            >
              <div className="absolute -top-6 left-4 flex gap-2">
                {Array.from({ length: review.rating }, (_, index) => (
                  <Image
                    key={index}
                    src={starIcon}
                    alt="rating star icon"
                    width={18}
                    height={18}
                  />
                ))}
              </div>
              <Image
                className="absolute -right-6 -top-8"
                src={review.profile_photo_url}
                alt="avatar of author`s review"
                width={64}
                height={64}
              />
              <cite className="px-4 text-lg  font-bold">
                {review.author_name.toUpperCase()}
              </cite>
              <blockquote className="px-4 text-[#C7C7C7] font-italic">
                {`"${review.text}"`}
              </blockquote>
              <p className="self-end px-4 text-[#C7C7C7] font-serif">
                {review.relative_time_description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default OpinionsPage;

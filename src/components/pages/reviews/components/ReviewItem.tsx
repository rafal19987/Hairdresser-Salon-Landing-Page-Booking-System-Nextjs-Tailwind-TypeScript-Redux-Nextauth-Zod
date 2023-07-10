import Image from 'next/image';
import { TReviewsProps } from '@/types/apiResponseTypes';
import starIcon from '@/assets/star-icon.svg';

const ReviewItem = ({ review }: { review: TReviewsProps }) => {
  const {
    rating,
    author_name,
    profile_photo_url,
    relative_time_description,
    text,
  } = review;

  return (
    <li className="relative flex flex-col mx-14 my-14 py-4 gap-4 bg-[#424242] rounded-[20px]">
      <div className="absolute -top-6 left-4 flex gap-2">
        {Array.from({ length: rating }, (_, index) => (
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
        src={profile_photo_url}
        alt="avatar of author`s review"
        width={64}
        height={64}
      />
      <cite className="px-4 text-lg  font-bold">{author_name}</cite>
      <blockquote className="px-4 text-[#C7C7C7] font-italic">
        {`"${text}"`}
      </blockquote>
      <p className="self-end px-4 text-[#C7C7C7] font-serif">
        {relative_time_description}
      </p>
    </li>
  );
};

export default ReviewItem;

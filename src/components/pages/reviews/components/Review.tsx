import Image from 'next/image';
import { TReviewsProps } from '@/types/apiResponseTypes';
import RatingStars from './RatingStars';
import * as Typography from '@/components/shared-atoms/typography/Typography';

const Review = ({ review }: { review: TReviewsProps }) => {
  const {
    rating,
    author_name,
    profile_photo_url,
    relative_time_description,
    text,
  } = review;

  return (
    <li className='relative flex flex-col my-14 py-4 px-4 gap-4 bg-[#424242] rounded-[20px] '>
      <RatingStars rating={rating} />
      <Image
        className='max-[295px]:hidden absolute -right-4 -top-8'
        src={profile_photo_url}
        alt='avatar of author`s review'
        width={64}
        height={64}
      />
      <Typography.Cite text={author_name} />
      <Typography.Blockquote text={text} />
      <Typography.P text={relative_time_description} align='right' />
    </li>
  );
};

export default Review;

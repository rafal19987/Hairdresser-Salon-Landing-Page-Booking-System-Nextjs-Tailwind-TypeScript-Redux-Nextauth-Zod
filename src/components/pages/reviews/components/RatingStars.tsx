import Image from 'next/image';
import starIcon from '@/assets/star-icon.svg';

const convertRatingScoreToArray = (ratingScore: number): number[] =>
  Array(ratingScore).fill(1);

const RatingStars = ({ rating }: { rating: number }) => {
  const ratingStarsCount = convertRatingScoreToArray(rating);

  return (
    <div className="absolute -top-6 left-4 flex gap-2">
      {ratingStarsCount.map((_, idx) => (
        <Image
          key={idx}
          src={starIcon}
          alt="star icon"
          width={18}
          height={18}
        />
      ))}
    </div>
  );
};

export default RatingStars;

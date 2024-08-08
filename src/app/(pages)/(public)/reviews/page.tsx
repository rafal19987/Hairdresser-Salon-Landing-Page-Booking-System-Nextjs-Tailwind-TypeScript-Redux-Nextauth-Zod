import ReviewsPage from '@/components/pages/reviews/ReviewsPage';
import { OPITIONS } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(OPITIONS.TITLE, OPITIONS.DESCRIPTION);

const Reviews = () => {
  return <ReviewsPage />;
};

export default Reviews;

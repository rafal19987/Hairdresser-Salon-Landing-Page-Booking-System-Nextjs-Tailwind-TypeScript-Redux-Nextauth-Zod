import PricesPage from '@/components/pages/prices/PricesPage';
import { PRICING } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(PRICING.TITLE, PRICING.DESCRIPTION);
const Prices = () => {
  return <PricesPage />;
};

export default Prices;

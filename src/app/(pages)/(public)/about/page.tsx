import AboutPage from '@/components/pages/about/AboutPage';
import { ABOUT } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(ABOUT.TITLE, ABOUT.DESCRIPTION);
const About = () => {
  return <AboutPage />;
};

export default About;

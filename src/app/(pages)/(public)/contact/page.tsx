import ContactPage from '@/components/pages/contact/ContactPage';
import { CONTACT } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(CONTACT.TITLE, CONTACT.DESCRIPTION);

const Contact = () => {
  return <ContactPage />;
};

export default Contact;

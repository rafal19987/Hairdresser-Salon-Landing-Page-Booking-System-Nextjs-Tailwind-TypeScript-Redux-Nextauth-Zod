import Card from './components/Card';
import homePageContent from '@/helpers/content/pages/home/homeContent';
import * as Typography from '@/components/shared-atoms/typography/Typography';

const HomePage = () => {
  const { primaryHeader, secondaryHeader } = homePageContent;

  return (
    <div className="flex  flex-col gap-6 items-center  h-[calc(100vh-var(--header-height))] w-full p-4">
      <div className="flex flex-col gap-4 w-full">
        <Typography.H1 text="Fryzjer męski" />
        <Typography.H2 text="Umów się na wizytę" />
      </div>
      <div className="flex justify-center w-full h-4/5 mb-20 lg:w-fit lg:mt-12">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;

import Card from './components/Card';
import homePageContent from '@/helpers/content/pages/home/homeContent';

const HomePage = () => {
  const { primaryHeader, secondaryHeader } = homePageContent;

  return (
    <div className="flex grow flex-col gap-6 items-center  h-full w-full p-4">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-black dark:text-white text-3xl text-center font-bold">
          {primaryHeader}
        </h2>
        <h3 className="text-black dark:text-white text-2xl text-center font-bold">
          {secondaryHeader}
        </h3>
      </div>
      <div className="w-full h-4/5 mb-20 lg:w-fit">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;

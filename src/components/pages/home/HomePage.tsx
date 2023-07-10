import Card from './components/Card';
import homeContent from '@/helpers/content/pages/home/homeContent';

const HomePage = () => {
  const { primaryHeader, secondaryHeader } = homeContent;

  return (
    <div className="flex grow flex-col gap-12 items-center  h-full w-full">
      <div className="flex flex-col gap-4 pt-8">
        <h2 className="text-white text-5xl text-center font-bold">
          {primaryHeader}
        </h2>
        <h3 className="text-white text-3xl text-center font-bold">
          {secondaryHeader}
        </h3>
      </div>
      <div className="w-4/5 h-4/5 mb-20 lg:w-fit">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;

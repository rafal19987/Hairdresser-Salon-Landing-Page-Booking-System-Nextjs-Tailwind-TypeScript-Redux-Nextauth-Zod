import Card from '@/components/pages/home/card/Card';

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center h-full w-full bg-black">
      <div className="flex flex-col">
        <h2 className="text-white">Fryzjer męski i dziecięcy </h2>
        <h3 className="text-white">Umów się na wizytę</h3>
      </div>
      <div className="w-4/5 h-28">
        <Card />
      </div>
    </div>
  );
}

import ReviewsList from './components/ReviewsList';

const ReviewsPage = () => {
  return (
    <div className="w-full">
      <h2 className="relative w-fit mx-8 mt-8 text-3xl ">
        Opinie naszych klientów
      </h2>

      <section className="relative min-h-[50vh] h-fit my-8 border border-transparent lg:min-h-[20vh]">
        <div className="absolute top-0 w-2/4 h-3 bg-[var(--gold)]" />
        <div className="absolute top-[90px] -left-[82px] w-44 h-3 bg-[var(--gold)] rotate-90" />
        <ReviewsList />
        <div className="absolute bottom-0 right-0 w-2/4 h-3 bg-[var(--gold)]" />
        <div className="absolute bottom-[90px] -right-[82px] w-44 h-3 bg-[var(--gold)] -rotate-90" />
      </section>
    </div>
  );
};

export default ReviewsPage;

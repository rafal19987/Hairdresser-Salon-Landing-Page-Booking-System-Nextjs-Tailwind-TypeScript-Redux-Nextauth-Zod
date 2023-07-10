import ReviewsList from './components/reviews/ReviewsList';

const OpinionsPage = () => {
  return (
    <div className="w-full">
      <h2 className="relative w-fit mx-8 mt-8 text-2xl ">
        Opinie naszych klientów
        <div className="absolute -bottom-4 w-full h-3 bg-[var(--gold)]" />
        <div className="absolute -bottom-[98px] -left-[82px] w-44 h-3 bg-[var(--gold)] rotate-90" />
      </h2>

      <section>
        <ReviewsList />
      </section>
    </div>
  );
};

export default OpinionsPage;

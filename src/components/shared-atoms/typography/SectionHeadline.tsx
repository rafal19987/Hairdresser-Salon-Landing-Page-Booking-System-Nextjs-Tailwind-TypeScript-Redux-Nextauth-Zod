const SectionHeadline = ({
  children,
  headline,
}: {
  children: React.ReactNode;
  headline: string;
}) => {
  return (
    <section className="w-full mt-12">
      <h2 className="text-3xl text-center lg:text-4xl xl:text-5xl">
        {headline}
      </h2>
      {children}
    </section>
  );
};

export default SectionHeadline;

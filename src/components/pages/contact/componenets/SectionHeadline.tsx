const SectionHeadline = ({
  children,
  headline,
}: {
  children: React.ReactNode;
  headline: string;
}) => {
  return (
    <section className="w-full mt-12">
      <h2 className="text-3xl text-center">{headline}</h2>
      {children}
    </section>
  );
};

export default SectionHeadline;

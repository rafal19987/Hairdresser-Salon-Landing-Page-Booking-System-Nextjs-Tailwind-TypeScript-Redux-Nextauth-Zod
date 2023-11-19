const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex flex-grow flex-col gap-20 w-full py-10 px-7'>
      {children}
    </section>
  );
};

export default SectionWrapper;

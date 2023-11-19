type TGridContainerProps = {
  children: React.ReactNode;
};

const GridContainer = ({ children }: TGridContainerProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full'>
      {children}
    </div>
  );
};

export default GridContainer;

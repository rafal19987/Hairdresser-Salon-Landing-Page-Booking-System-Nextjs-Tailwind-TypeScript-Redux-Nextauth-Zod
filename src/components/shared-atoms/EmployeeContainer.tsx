type TEmployeeContainerProps = {
  children: React.ReactNode;
};

const EmployeeContainer = ({ children }: TEmployeeContainerProps) => {
  return (
    <div className='grid w-full gap-6 md:grid-cols-2 md:gap-4 md:grid md:justify-items-center  md:py-8 md:rounded-3xl md:mt-12 md:bg-gray-600/25  '>
      {children}
    </div>
  );
};

export default EmployeeContainer;

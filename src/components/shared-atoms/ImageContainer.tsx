type TImageContainerProps = {
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  mt?: number | string;
  className?: string;
};

const ImageContainer = ({
  children,
  height = 273,
  width = 'full',
  rounded = '3xl',
  mt = 8,
  className,
}: TImageContainerProps) => {
  return (
    <div
      className={`relative w-full h-[503px] mt-${mt} rounded-${rounded}  overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default ImageContainer;

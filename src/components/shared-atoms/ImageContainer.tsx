type TImageContainerProps = {
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  mt?: number | string;
  className?: string;
};

const ImageContainer: React.FC<TImageContainerProps> = ({
  children,
  height = 273,
  width = 'full',
  rounded = '3xl',
  mt = 8,
  className,
}) => {
  return (
    <div
      className={`relative w-full h-[${height}px] mt-${mt} rounded-${rounded} overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default ImageContainer;

type TFlexContainerProps = {
  children: React.ReactNode;
  flexDirection?: 'col' | 'row' | 'col-reverse' | 'row-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  className?: string;
};

const FlexContainer = ({
  gap = '4',
  children,
  flexDirection = 'col',
  flexWrap = 'nowrap',
  className,
}: TFlexContainerProps) => {
  return (
    <div
      className={`flex flex-${flexWrap} flex-${flexDirection} gap-${gap} w-full ${className}`}
    >
      {
        // flex flex-row flex-wrap items-center justify-center gap-8 w-full
      }
      {children}
    </div>
  );
};

export default FlexContainer;

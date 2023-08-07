type TSmallHeadlineProps = {
  text: string;
  align?: 'left' | 'right' | 'center';
};

const SmallHeadline = ({ text, align = 'center' }: TSmallHeadlineProps) => {
  return <h2 className={`text-2xl text-${align}`}>{text}</h2>;
};

export default SmallHeadline;

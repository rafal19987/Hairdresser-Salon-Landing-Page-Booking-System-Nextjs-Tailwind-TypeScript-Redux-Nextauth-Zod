export type TTypographyProps = {
  text: string;
  align?: 'left' | 'center' | 'right';
};

export const H1 = ({ text, align = 'center' }: TTypographyProps) => {
  return (
    <h1
      className={`w-full text-4xl font-montserrat font-bold tracking-tighter leading-normal text-${align} lg:text-5xl`}
    >
      {text}
    </h1>
  );
};

export const H2 = ({ text, align = 'left' }: TTypographyProps) => {
  return (
    <h2
      className={`w-full text-${align} text-3xl font-semibold tracking-tight text-slate-200 md:text-4xl md:text-center`}
    >
      {text}
    </h2>
  );
};

export const H3 = ({ text, align = 'center' }: TTypographyProps) => {
  return (
    <h3
      className={`w-full  text-${align} text-2xl font-semibold tracking-tight`}
    >
      {text}
    </h3>
  );
};

export const H4 = ({ text, align = 'center' }: TTypographyProps) => {
  return (
    <h4
      className={`w-full  text-${align} text-xl font-semibold tracking-tight`}
    >
      {text}
    </h4>
  );
};

export const P = ({ text, align = 'left' }: TTypographyProps) => {
  return (
    <p
      className={`w-full  text-${align} leading-normal text-base font-lato text-slate-200 md:text-2xl [&:not(:first-child)]:mt-4`}
    >
      {text}
    </p>
  );
};

export const Blockquote = ({ text, align = 'left' }: TTypographyProps) => {
  return (
    <blockquote
      className={`w-full pl-6 md:text-xl text-${align} border-l border-l-[var(--gold)] text-stone-300 text-md font-lato tracking-wide italic before:content-['"'] after:content-['"']`}
    >
      {text}
    </blockquote>
  );
};

export const ImageCaption = ({ text }: TTypographyProps) => {
  return (
    <span className='self-start text-xl font-medium  md:text-3xl'>{text}</span>
  );
};

export const Cite = ({ text }: TTypographyProps) => {
  return <cite className=' text-lg font-bold'>{text}</cite>;
};

export type TTypographyProps = {
  text: string;
  mt?: number;
};

export const H1 = ({ text }: TTypographyProps) => {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
};

export const H2 = ({ text }: TTypographyProps) => {
  return (
    <h2 className="w-full text-3xl font-semibold tracking-tight md:text-4xl md:text-center">
      {text}
    </h2>
  );
};

export const H3 = ({ text }: TTypographyProps) => {
  return <h3 className="text-2xl font-semibold tracking-tight">{text}</h3>;
};

export const H4 = ({ text }: TTypographyProps) => {
  return <h4 className="text-xl font-semibold  tracking-tight">{text}</h4>;
};

export const P = ({ text }: TTypographyProps) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-4">{text}</p>;
};

export const Blockquote = ({ text, mt = 2 }: TTypographyProps) => {
  return (
    <blockquote
      className={`mt-${mt} pl-6 text-base md:text-xl  border-l border-l-[var(--gold)] italic font-thin before:content-['"'] after:content-['"']`}
    >
      {text}
    </blockquote>
  );
};

export const ImageCaption = ({ text }: TTypographyProps) => {
  return (
    <span className="self-start  text-xl font-medium  md:text-3xl">{text}</span>
  );
};

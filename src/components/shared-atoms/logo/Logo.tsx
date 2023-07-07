import Image from 'next/image';

const Logo = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} fill={true} priority={true} alt={alt} />;
};

export default Logo;

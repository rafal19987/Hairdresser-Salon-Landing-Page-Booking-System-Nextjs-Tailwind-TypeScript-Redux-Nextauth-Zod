const Label = ({ htmlFor, value }: { htmlFor: string; value: string }) => {
  return (
    <label
      className='text-xl text-neutral-300'
      htmlFor={htmlFor}
      data-aos='fade-down'
      data-aos-once='true'
      data-aos-delay='100'
    >
      {value}:
    </label>
  );
};

export default Label;

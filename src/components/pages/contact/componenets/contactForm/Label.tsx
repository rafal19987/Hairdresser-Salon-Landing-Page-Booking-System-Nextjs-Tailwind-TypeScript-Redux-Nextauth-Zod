const Label = ({ htmlFor, value }: { htmlFor: string; value: string }) => {
  return (
    <label className="text-xl text-neutral-300" htmlFor={htmlFor}>
      {value}:
    </label>
  );
};

export default Label;

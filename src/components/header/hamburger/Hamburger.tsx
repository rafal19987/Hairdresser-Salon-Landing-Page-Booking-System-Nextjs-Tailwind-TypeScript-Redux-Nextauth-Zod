'use client';

const clickHandler = () => {
  console.log('Clicked');
};

const Hamburger = () => {
  return (
    <button
      className="flex flex-col items-center justify-evenly w-full h-full"
      onClick={clickHandler}
    >
      <span className="w-4/5 h-1 bg-[var(--gold)] rounded-lg"></span>
      <span className="w-4/5 h-1 bg-[var(--gold)] rounded-lg"></span>
      <span className="w-4/5 h-1 bg-[var(--gold)] rounded-lg"></span>
    </button>
  );
};

export default Hamburger;

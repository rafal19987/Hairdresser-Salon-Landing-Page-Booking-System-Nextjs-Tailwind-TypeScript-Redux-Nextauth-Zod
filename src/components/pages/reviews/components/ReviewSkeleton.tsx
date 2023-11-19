const ReviewSkeleton = () => {
  return (
    <div className='relative flex flex-col h-48  my-14 py-4 gap-4 bg-[#424242] rounded-[20px] animate-pulse'>
      <div className='absolute -top-8 text-xl opacity-0' aria-busy>
        Wczytywanie...
      </div>
      <div className='absolute -right-4 -top-8 max-[295px]:hidden w-16 h-16 rounded-full bg-slate-400'></div>
    </div>
  );
};

export default ReviewSkeleton;

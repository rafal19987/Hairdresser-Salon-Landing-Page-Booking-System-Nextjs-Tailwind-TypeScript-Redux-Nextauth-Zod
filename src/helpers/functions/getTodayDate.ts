const getTodayDate = () => {
  const date = new Date();

  return new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(date);
};

export default getTodayDate;

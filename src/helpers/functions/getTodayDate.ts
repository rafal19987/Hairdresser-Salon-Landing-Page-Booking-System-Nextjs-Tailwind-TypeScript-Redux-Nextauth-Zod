const getTodayDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let today: string | null = null;
  let monthInWords = null;

  const months: string[] = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];

  switch (month) {
    case 0:
      monthInWords = months[0];
      break;
    case 1:
      monthInWords = months[1];
      break;
    case 2:
      monthInWords = months[2];
      break;
    case 3:
      monthInWords = months[3];
      break;
    case 4:
      monthInWords = months[4];
      break;
    case 5:
      monthInWords = months[5];
      break;
    case 6:
      monthInWords = months[6];
      break;
    case 7:
      monthInWords = months[7];
      break;

    case 8:
      monthInWords = months[8];
      break;
    case 9:
      monthInWords = months[9];
      break;

    case 10:
      monthInWords = months[10];
      break;
    case 11:
      monthInWords = months[11];
      break;
    default:
      console.log('...');
  }

  today = `${day} ${monthInWords} ${year}`;

  return today;
};

export default getTodayDate;

import { TContactPageContentProps } from '@/types/contentTypes';

const contactPageContent: TContactPageContentProps = {
  pageHeadline: 'Znajdziesz Nas tutaj',
  address: {
    placeScreen: '',
    street: 'ul. Nowatorska 12',
    zipCode: '02-310 Warszawa',
  },
  openHoursHeadline: 'Jesteśmy otwarci:',
  openHours: {
    workingWeek: 'Pon-Pt: 8:00 - 18:00',
    weekend: 'Sobota 7:00 - 20:00',
  },
  employeesHeadline: 'Umów się na wizytę',
  emplyees: {
    firstEmployee: {
      photo: '',
      name: 'Kasia',
      phoneNumber: '500 501 502',
    },
    secondEmployee: {
      photo: '',
      name: 'Aleksandra',
      phoneNumber: '503 504 505',
    },
  },
  inquiryHeadline: 'Wyślij zapytanie',
  contactForm: {
    name: {
      label: 'Imię:',
      placeholder: 'Podaj imię',
    },
    phoneNumber: {
      label: 'Numer telefonu:',
      placeholder: 'Podaj numer telefonu',
    },
    message: {
      label: 'Wiadomość:',
      placeholder: 'Napisz co Ci leży na duszy',
    },
    sendBtnDescription: 'Wyślij',
  },
};

export default contactPageContent;

import avatar1 from '@/assets/avatars/avatar1.png';
import avatar2 from '@/assets/avatars/avatar2.png';
import avatar3 from '@/assets/avatars/avatar3.png';
import avatar4 from '@/assets/avatars/avatar4.png';
import avatar5 from '@/assets/avatars/avatar5.png';
import avatar6 from '@/assets/avatars/avatar6.png';
import avatar7 from '@/assets/avatars/avatar7.png';
import avatar8 from '@/assets/avatars/avatar8.png';
import avatar9 from '@/assets/avatars/avatar9.png';
import avatar10 from '@/assets/avatars/avatar10.png';
import { type TReviewsProps } from '@/types/apiResponseTypes';

export const fakeReviews: TReviewsProps[] = [
  {
    author_name: 'Jan Kowalski',
    profile_photo_url: avatar1,
    rating: 5,
    relative_time_description: '27.10.2023r.',
    text: 'Wizyta w Męskiej Strefie była niesamowita! Zawsze jestem zadowolony z ich pracy. Mój nowy fryzur wygląda świetnie!',
  },
  {
    author_name: 'Andrzej Nowak',
    profile_photo_url: avatar2,
    rating: 5,
    relative_time_description: '23.09.2023r.',
    text: 'Absolutni mistrzowie w sztuce strzyżenia. Zawsze są dokładni i słuchają moich sugestii. Polecam go każdemu.',
  },
  {
    author_name: 'Michał Wiśniewski',
    profile_photo_url: avatar3,
    rating: 5,
    relative_time_description: '21.09.2023r.',
    text: 'Ten salon fryzjerski to prawdziwa oaza relaksu. Oprócz znakomitej fryzury, dostajesz także fantastyczny masaż głowy.',
  },
  {
    author_name: 'Paweł Szymański',
    profile_photo_url: avatar4,
    rating: 5,
    relative_time_description: '11.09.2023r.',
    text: 'Fryzjer zawsze wie, jak dopasować fryzurę do mojego stylu. Jestem bardzo zadowolony z każdej wizyty w jego salonie.',
  },

  {
    author_name: 'Zofia Krzeńska',
    profile_photo_url: avatar5,
    rating: 3,
    relative_time_description: '05.09.2023r.',
    text: 'Wizyta w salonie fryzjerskim była przyjemna, ale niestety efekt fryzury nie był taki, jak oczekiwałam.',
  },

  {
    author_name: 'Natalia Krzeńska',
    profile_photo_url: avatar6,
    rating: 5,
    relative_time_description: '11.09.2023r.',
    text: 'Świetnie!',
  },

  {
    author_name: 'Aleksandra Proch',
    profile_photo_url: avatar7,
    rating: 3,
    relative_time_description: '11.09.2023r.',
    text: 'Wizyta w salonie fryzjerskim była średnia. Obsługa była miła, ale efekt fryzury nie spełnił moich oczekiwań.',
  },

  {
    author_name: 'Wieczysława Pytko',
    profile_photo_url: avatar8,
    rating: 2,
    relative_time_description: '11.08.2023r.',
    text: 'Salon fryzjerski oferuje dobre usługi, ale niestety moja fryzura nie była idealna. Mam nadzieję, że mogą jeszcze poprawić jakość usług.',
  },

  {
    author_name: 'Martyna Kraśko',
    profile_photo_url: avatar9,
    rating: 3,
    relative_time_description: '11.08.2023r.',
    text: 'Salon fryzjerski był nieco rozczarowujący. Obsługa była okej, ale efekt końcowy nie spełnił moich oczekiwań.',
  },

  {
    author_name: 'Krzysztof Dąbrowski',
    profile_photo_url: avatar10,
    rating: 4,
    relative_time_description: '10.09.2023r.',
    text: 'Atmosfera w jego salonie jest zawsze przyjemna, a fryzura perfekcyjna.',
  },
];

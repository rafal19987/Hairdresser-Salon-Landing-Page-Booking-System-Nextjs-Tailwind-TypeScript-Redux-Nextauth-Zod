'use client';

import Image from 'next/image';
import employee1 from '@/assets/employee-1-face-image-big.png';
import employee2 from '@/assets/employee-2-face-image-big.png';
import googleMapsScreen from '@/assets/google-map-screen.png';

const clickHandler = (e: React.MouseEvent<HTMLElement>): void => {
  e.preventDefault();
  console.log('Jebac');
};

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center w-full p-6 text-white">
      <h2 className="text-3xl ">Znajdziesz Nas tutaj</h2>
      <div className="flex flex-col items-center mt-12 w-full">
        <div className="relative w-full h-56 rounded-lg">
          <Image
            src={googleMapsScreen}
            alt="google maps screen how to reach haidresser"
            fill
          />
        </div>
        <div className="flex justify-between w-full mt-3">
          <h3 className="text-xl">ul. Nowatorska 12</h3>
          <h3 className="text-xl">02-310 Warszwa</h3>
        </div>
      </div>
      <h2 className="text-3xl mt-12">Jesteśmy otwarci:</h2>
      <div className="flex flex-col mt-6">
        <span className="text-xl">Pon-Pt 8:00 - 18:00</span>
        <span className="text-xl">Sobota 7:00 - 20:00</span>
      </div>
      <h2 className="text-3xl mt-12 text-left">
        Umów się na wizytę do Naszych specjalistek
      </h2>
      <div className="flex mt-12 w-full">
        <div className="relative w-[187px] h-[235px] rounded-lg shadow-cardShadow">
          <Image
            className="rounded-lg"
            src={employee1}
            alt="Employee 1 face"
            fill
          />
        </div>
        <div className="flex flex-col gap-2 ml-4">
          <span>Wiktoria</span>
          <span>500 501 502</span>
        </div>
      </div>
      <div className="flex self-end mt-8">
        <div className="flex flex-col self-end gap-2 mr-4 ">
          <span>Agnieszka</span>
          <span>500 501 502</span>
        </div>
        <div className="relative w-[187px] h-[235px] rounded-lg shadow-cardShadowReverse">
          <Image
            className="rounded-lg"
            src={employee2}
            alt="Employee 2 face"
            fill
          />
        </div>
      </div>
      <h2 className="text-3xl mt-12 text-center w-full">Wyślij zapytanie</h2>
      <div className="mt-12 mb-12 w-full">
        <form className="flex flex-col" action="">
          <label className="text-xl" htmlFor="imie">
            Imię:
          </label>
          <input
            className="h-12 mt-2 p-4 border border-neutral-500 bg-transparent focus:border-[var(--gold)] placeholder:text-neutral-500"
            type="text"
            name="imie"
            placeholder="Podaj imię"
          />
          <label className="mt-4 text-xl" htmlFor="phoneNumber">
            Number telefonu:
          </label>
          <input
            className="h-12 mt-2 p-4 border border-neutral-500 bg-transparent focus:border-[var(--gold)] placeholder:text-neutral-500"
            type="text"
            name="phoneNumber"
            placeholder="Podaj numer telefonu"
          />
          <label className="mt-4 text-xl" htmlFor="message">
            Wiadomość:
          </label>
          <input
            className="h-24 mt-2 p-4 border border-neutral-500 bg-transparent focus:border-[var(--gold)] placeholder:text-neutral-500"
            type="text"
            name="message"
            placeholder="Napisz co Ci leży na duszy"
          />
          <button
            className="self-end w-[200px] h-[55px] mt-8 border border-[var(--gold)] text-xl text-[var(--gold)] shadow-cardShadow hover:shadow-none hover:translate-y-2 hover:-translate-x-2 transition-all duration-100"
            onClick={(e) => clickHandler(e)}
          >
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

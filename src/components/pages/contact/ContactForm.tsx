'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

type TFormProps = {
  name: string;
  phoneNumber: number;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormProps>();

  const onSubmit: SubmitHandler<TFormProps> = (data) => console.log(data);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-xl" htmlFor="imie">
        Imię:
      </label>
      <input
        {...register('name', { required: true })}
        className="h-12 mt-2 p-4 border border-neutral-500 bg-transparent focus:border-[var(--gold)] placeholder:text-neutral-500"
        type="text"
        placeholder="Podaj imię"
      />
      <label className="mt-4 text-xl" htmlFor="phoneNumber">
        Number telefonu:
      </label>
      <input
        {...register('phoneNumber', { required: true })}
        className="h-12 mt-2 p-4 border border-neutral-500 bg-transparent focus:border-[var(--gold)] placeholder:text-neutral-500"
        type="number"
        placeholder="Podaj numer telefonu"
      />
      <label className="mt-4 text-xl" htmlFor="message">
        Wiadomość:
      </label>
      <textarea
        {...register('message', { required: true })}
        className="h-24 mt-2 p-4 border border-neutral-500 bg-transparent focus:border-[var(--gold)] placeholder:text-neutral-500"
        placeholder="Napisz co Ci leży na duszy"
      />
      <input
        className="self-end w-[200px] h-[55px] mt-8 border border-[var(--gold)] text-xl text-[var(--gold)] shadow-cardShadow hover:shadow-none hover:translate-y-2 hover:-translate-x-2 transition-all duration-100"
        type="submit"
        value="Wyślij"
      />
    </form>
  );
};

export default ContactForm;

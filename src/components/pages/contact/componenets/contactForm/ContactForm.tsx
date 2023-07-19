'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Wymagane minimum 4 znaki' })
    .max(20, { message: 'Dozwolone maksymalnie 20 znaków' })
    .transform((v) => v.toLowerCase().replace(/\s+/g, '_')),
  phoneNumber: z
    .string()
    .length(9, { message: 'Numer musi zawierać 9 znaków' })
    .regex(phoneRegex, { message: 'Niepoprawny numer telefonu' }),
  message: z
    .string()
    .min(10, { message: 'Wiadomość musi zawierać przynajmniej 10 znaków' })
    .max(40, { message: 'Maksymalna długość wiadomości to 40 znaków' }),
});

type TFormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getFieldState,

    formState: { isDirty, errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phoneNumber: '',
      message: '',
    },
  });

  const name = watch('name');
  const nameState = getFieldState('name');
  const phoneNumber = watch('phoneNumber');
  const phoneNumberState = getFieldState('phoneNumber');
  const message = watch('message');
  const messageState = getFieldState('message');

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-xl text-neutral-300" htmlFor="imie">
        Imię:
      </label>
      <input
        {...register('name')}
        type="text"
        id="name"
        className={`h-12 mt-2 p-4 border 
        ${!nameState.isDirty && ' border-neutral-500'}
        ${name.length > 0 && name.length < 4 && 'border-red-500'}
        ${
          !nameState.invalid &&
          nameState.isDirty &&
          'border-green-500 text-green-500'
        }
        bg-transparent  placeholder:text-neutral-500 outline-none`}
        placeholder="Podaj imię"
        aria-invalid={errors.name ? 'true' : 'false'}
      />

      <span className="w-2/4 h-6 mt-1 pl-4 text-sm text-red-500">
        {errors.name?.message}
      </span>

      <label className="mt-1 text-xl text-neutral-300" htmlFor="phoneNumber">
        Number telefonu:
      </label>
      <input
        {...register('phoneNumber')}
        type="text"
        id="phoneNumber"
        className={`h-12 mt-2 p-4 border 
        ${!phoneNumberState.isDirty && ' border-neutral-500'}
        ${phoneNumber.length > 0 && phoneNumber.length < 9 && 'border-red-500'} 
        ${
          !phoneNumberState.invalid &&
          phoneNumberState.isDirty &&
          'border-green-500 text-green-500'
        }
        bg-transparent  placeholder:text-neutral-500 outline-none`}
        placeholder="Podaj numer telefonu"
        aria-invalid={errors.phoneNumber ? 'true' : 'false'}
      />
      <span className="w-2/4 h-6 mt-1 text-sm text-red-500">
        {errors.phoneNumber?.message}
      </span>

      <label className="mt-1 text-xl text-neutral-300" htmlFor="message">
        Wiadomość:
      </label>
      <textarea
        {...register('message')}
        id="message"
        className={`h-24 mt-2 p-4 border 
        ${!messageState.isDirty && ' border-neutral-500'}
        ${message.length > 0 && message.length < 10 && 'border-red-500'} 
        ${
          !messageState.invalid &&
          messageState.isDirty &&
          'border-green-500 text-green-500'
        }
        bg-transparent  placeholder:text-neutral-500 outline-none`}
        placeholder="Napisz co Ci leży na duszy"
        aria-invalid={errors.message ? 'true' : 'false'}
      />
      <span className="w-full h-6 mt-1 text-sm text-red-500">
        {errors.message?.message}
      </span>

      <button
        disabled={!isDirty || isSubmitting}
        onClick={() => reset()}
        className="w-1/5 h-12 mt-3 border border-[var(--gold)] disabled:border-neutral-500 text-[var(--gold)] disabled:text-neutral-500 disabled:cursor-not-allowed transition-colors duration-200"
      >
        Wyczyść
      </button>
      <input
        disabled={!isValid || isSubmitting}
        className={`self-end w-[200px] h-[55px] mt-8 border ${
          isValid
            ? 'border-[var(--gold)] text-[var(--gold)] shadow-cardShadow hover:cursor-pointer hover:translate-y-2 hover:-translate-x-2 '
            : 'disabled:border-neutral-500 disabled:text-neutral-500 disabled:shadow-none disabled:cursor-not-allowed'
        } text-xl hover:shadow-none transition-all duration-300`}
        type="submit"
        value={isValid ? 'Wyślij' : 'Uzupełnij dane'}
      />
    </form>
  );
};

export default ContactForm;

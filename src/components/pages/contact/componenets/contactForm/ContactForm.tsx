'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Label from './Label';

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
    .max(150, { message: 'Maksymalna długość wiadomości to 150 znaków' }),
});

type TFormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
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

  const nameState = getFieldState('name');
  const phoneNumberState = getFieldState('phoneNumber');
  const messageState = getFieldState('message');

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="flex flex-col w-full lg:w-[800px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label htmlFor="imie" value="Imię" />
      <input
        {...register('name')}
        type="text"
        id="name"
        className={`h-12 mt-2 p-4 border 
        ${
          errors.name
            ? 'border-red-500'
            : 'border-[var(--gold)] text-[var(--gold)]'
        }
        ${!nameState.isDirty && ' border-neutral-500 text-neutral-500'}
        bg-transparent  placeholder:text-neutral-500 outline-none`}
        placeholder="Podaj imię"
        aria-invalid={errors.name ? 'true' : 'false'}
      />

      <span className="w-2/4 h-6 mt-1 pl-4 text-sm text-red-500">
        {errors.name?.message}
      </span>

      <Label htmlFor="phoneNumber" value="Number telefonu" />
      <input
        {...register('phoneNumber')}
        type="text"
        id="phoneNumber"
        className={`h-12 mt-2 p-4 border 
        ${
          errors.phoneNumber
            ? 'border-red-500'
            : 'border-[var(--gold)] text-[var(--gold)]'
        }
        ${!phoneNumberState.isDirty && ' border-neutral-500 text-neutral-500'}
        
        bg-transparent  placeholder:text-neutral-500 outline-none`}
        placeholder="Podaj numer telefonu"
        aria-invalid={errors.phoneNumber ? 'true' : 'false'}
      />
      <span className="w-2/4 h-6 mt-1 text-sm text-red-500">
        {errors.phoneNumber?.message}
      </span>

      <Label htmlFor="message" value="Wiadomość" />

      <textarea
        {...register('message')}
        id="message"
        className={`h-24 mt-2 p-4 border 
        ${
          errors.message
            ? 'border-red-500'
            : 'border-[var(--gold)] text-[var(--gold)]'
        }
        ${!messageState.isDirty && ' border-neutral-500 text-neutral-500'}
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
        className="w-28 md:w-1/5 h-12 mt-3 border border-green-300 disabled:border-neutral-800 text-green-300 disabled:text-neutral-800 disabled:cursor-not-allowed transition-colors duration-200"
      >
        Wyczyść
      </button>
      <input
        disabled={!isValid || isSubmitting}
        className={`self-end w-[200px] h-[55px] mt-8 border ${
          isValid
            ? 'border-[var(--gold)] text-[var(--gold)] shadow-cardShadow hover:cursor-pointer hover:translate-y-2 hover:-translate-x-2 '
            : 'disabled:border-neutral-800 disabled:text-neutral-800 disabled:shadow-none disabled:cursor-not-allowed'
        } text-xl hover:shadow-none transition-all duration-300`}
        type="submit"
        value="Wyślij"
      />
    </form>
  );
};

export default ContactForm;

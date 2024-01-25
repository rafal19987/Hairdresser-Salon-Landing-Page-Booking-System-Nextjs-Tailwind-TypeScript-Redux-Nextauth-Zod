'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import validator from 'validator';
import * as z from 'zod';
import toast from 'react-hot-toast';

import { FormFieldContainer } from '@/components/shared-atoms/FormFieldContainer';
import { FormFieldLabel } from '@/components/shared-atoms/FormFieldLabel';
import { FormFieldInput } from '@/components/shared-atoms/FormFieldInput';
import { registerUser } from '@/lib/actions/authAction';

const userSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Pole jest wymagane' })
      .trim()
      .regex(new RegExp('^[a-zA-Z]+$'), 'Imię może zawierać tylko litery'),
    email: z
      .string()
      .min(1, { message: 'Pole jest wymagane' })
      .email('Wprowadź poprawny email')
      .trim(),
    phone: z
      .string()
      .refine(validator.isMobilePhone, 'Podaj poprawny numer telefonu'),
    password: z
      .string()
      .min(6, { message: 'Hasło musi zawierać przynajmniej 6 znaków' }),
    confirmPassword: z.string().nonempty('To pole jest wymagane'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'Musisz zaznaczyć zgodę' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Wprowadzone hasła są od siebie różne',
    path: ['confirmPassword'],
  });

type TUser = z.infer<typeof userSchema>;

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({ resolver: zodResolver(userSchema) });

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    const { confirmPassword, terms, ...user } = data;

    try {
      const result = await registerUser(user);
      toast.success('Zarejestrowano poprawnie');
    } catch (error) {
      toast.error('Wystąpił błąd, sprawdź konsolę');
      console.log(error);
    }
  };

  return (
    <div className='h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-start justify-center grow gap-1 h-full'
      >
        <FormFieldContainer>
          <FormFieldLabel htmlFor='name' text='Imię' />
          <FormFieldInput
            id='name'
            type='text'
            placeholder='Wprowadź Imię'
            aria-label='Wprowadź Imię'
            errorMsg={errors.name?.message}
            register={register}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <FormFieldLabel htmlFor='email' text='Adres Email' />
          <FormFieldInput
            id='email'
            type='text'
            placeholder='Wprowadź adres email'
            aria-label='Wprowadź adres email'
            errorMsg={errors.email?.message}
            register={register}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <FormFieldLabel htmlFor='phone' text='Numer telefonu' />
          <FormFieldInput
            id='phone'
            type='tel'
            placeholder='Wprowadź numer telefonu'
            aria-label='Wprowadź numer telefonu'
            errorMsg={errors.phone?.message}
            register={register}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <FormFieldLabel htmlFor='password' text='Hasło' />
          <FormFieldInput
            id='password'
            type='password'
            placeholder='Wprowadź hasło'
            aria-label='Wprowadź hasło'
            errorMsg={errors.password?.message}
            register={register}
          />
        </FormFieldContainer>

        <FormFieldContainer>
          <FormFieldLabel htmlFor='confirmPassword' text='Potwierdź hasło' />
          <FormFieldInput
            id='confirmPassword'
            type='password'
            placeholder='Wprowadź ponownie hasło'
            aria-label='Wprowadź ponownie hasło'
            errorMsg={errors.confirmPassword?.message}
            register={register}
          />
        </FormFieldContainer>

        <div className='flex flex-col items-start mt-4'>
          <div className='flex flex-row-reverse gap-2'>
            <label
              htmlFor='terms'
              className={`text-sm font-bold ${
                errors.terms ? 'text-red-500' : 'text-gray-700'
              }`}
            >
              Zaakceptuj zgodę
            </label>
            <input type='checkbox' id='terms' {...register('terms')} />
          </div>
          {errors.terms && (
            <p className='text-xs italic text-red-500 ml-5'>
              {errors.terms?.message}
            </p>
          )}
        </div>
        <div className='self-center mt-12 text-center'>
          <button
            className='w-fit px-6 py-4 font-bold text-black bg-[var(--gold)] focus:outline-red-300 focus:shadow-outline'
            type='submit'
          >
            Zarejestruj się
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;

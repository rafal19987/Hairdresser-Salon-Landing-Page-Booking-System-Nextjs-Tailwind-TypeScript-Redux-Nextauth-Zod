'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { FormFieldInput } from '@/components/shared-atoms/FormFieldInput';
import { FormFieldLabel } from '@/components/shared-atoms/FormFieldLabel';
import { FormFieldContainer } from '@/components/shared-atoms/FormFieldContainer';
import { forgotPassword } from '@/lib/actions/authAction';

const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Pole jest wymagane' })
    .email('Wprowadź poprawny email')
    .trim(),
});

type TEmail = z.infer<typeof emailSchema>;

function ForgotPasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TEmail>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<TEmail> = async (data) => {
    try {
      const result = await forgotPassword(data.email);

      if (result === 'userNotExist') return <p>Użytkownik nie istnieje</p>;

      if (result === 'error') return toast.error('Wystąpił błąd');

      toast.success('Wysłano wiadomość email');
      router.push('/resetPassword');
    } catch (error) {
      console.log(error);
      return toast.error('Wystąpił błąd');
    }
  };

  return (
    <div className='h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-start justify-center grow gap-1 h-full'
      >
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

        <div className='self-center mt-12 text-center'>
          <button
            className='w-fit px-6 py-4 font-bold text-black bg-[var(--gold)] focus:outline-red-300 focus:shadow-outline'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
          </button>
        </div>
        <div className='flex gap-2'>
          <p className='text-xs mt-2'>Nie posiadasz konta?</p>
          <Link className='text-xs mt-2 hover:underline' href='/register'>
            Zarejestruj się.
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;

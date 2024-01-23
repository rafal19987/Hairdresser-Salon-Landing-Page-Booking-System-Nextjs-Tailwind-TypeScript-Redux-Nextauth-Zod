'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
// import NextAuthProviders from './NextAuthProviders';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { FormFieldInput } from '@/components/shared-atoms/FormFieldInput';
import { FormFieldLabel } from '@/components/shared-atoms/FormFieldLabel';
import { FormFieldContainer } from '@/components/shared-atoms/FormFieldContainer';

interface Props {
  callbackUrl?: string;
}

const userSchema = z.object({
  email: z.string().email('Podaj poprawny email'),
  password: z.string().min(1, 'Wprowadź swoje hasło'),
});

type TUser = z.infer<typeof userSchema>;

function LoginPage(props: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUser>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error(result?.error!);
      return;
    }
    toast.success('Zalogowano');
    router.push(props.callbackUrl ? props.callbackUrl : '/');
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
            errors={errors}
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
            errors={errors}
            register={register}
          />
        </FormFieldContainer>

        <div className='self-center mt-12 text-center'>
          <button
            className='w-fit px-6 py-4 font-bold text-black bg-[var(--gold)] focus:outline-red-300 focus:shadow-outline'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logowanie...' : 'Zaloguj'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

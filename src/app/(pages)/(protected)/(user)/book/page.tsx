'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import { Modal } from '@/components/pages/book-visit/components/modal';
import { Table } from './Table';

const BookPage = () => {
  const { data: session } = useSession();

  if (!session?.user) return <button onClick={() => signIn()}>Zaloguj</button>;

  return (
    <div className='relative flex flex-col grow overflow-x-hidden border'>
      {session && <button onClick={() => signOut()}>Wyloguj</button>}
      <h1>{session?.user?.name}</h1>
      <section className=' overflow-y-auto overflow-x-hidden p-8'>
        <Table />
      </section>
      <Modal />
    </div>
  );
};

export default BookPage;

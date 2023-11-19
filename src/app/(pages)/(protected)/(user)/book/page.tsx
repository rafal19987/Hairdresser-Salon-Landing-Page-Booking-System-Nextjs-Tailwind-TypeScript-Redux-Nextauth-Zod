'use client';

import { useSession } from 'next-auth/react';
import { Modal } from '@/components/pages/book-visit/components/modal';
import { Table } from './Table';

const BookPage = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div className='relative flex flex-col grow overflow-x-hidden'>
      <section className=' overflow-y-auto overflow-x-hidden p-8'>
        <Table />
      </section>
      <Modal />
    </div>
  );
};

export default BookPage;

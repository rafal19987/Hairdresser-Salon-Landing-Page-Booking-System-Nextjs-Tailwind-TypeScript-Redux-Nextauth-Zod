import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Modal } from '@/components/pages/book-visit/components/modal';
import { Table } from './Table';
import { Button } from '@/components/shared-atoms/Button';
import { SigninButton } from '@/components/shared-atoms/SigninButton';

const BookPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect('/login');

  return (
    <div className='relative flex flex-col grow overflow-x-hidden'>
      <section className=' overflow-y-auto overflow-x-hidden p-8'>
        <SigninButton />
        <Table />
      </section>
      <Modal />
    </div>
  );
};

export default BookPage;

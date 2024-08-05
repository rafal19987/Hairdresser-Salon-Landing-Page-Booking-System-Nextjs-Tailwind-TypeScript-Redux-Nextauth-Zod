import Image from 'next/image';
import confirmIcon from '@icons/confirm-icon.svg';

function ActivationLinkSendConfirmPage() {
  return (
    <div className='flex flex-col gap-8 items-center justify-center w-full h-52 p-4 rounded-xl border border-[#555555] bg-[#FFD700]/30'>
      <Image className='' src={confirmIcon} alt='' aria-hidden />
      <p className='text-center text-[#555555]'>
        Na Twój adres email został wysłany link potwierdzający rejestrację.
      </p>
    </div>
  );
}

export default ActivationLinkSendConfirmPage;

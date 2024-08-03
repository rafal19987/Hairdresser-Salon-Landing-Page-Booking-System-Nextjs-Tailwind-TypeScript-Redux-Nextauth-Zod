import { activateUser } from '@/lib/actions/authAction';

interface Props {
  params: {
    jwt: string;
  };
}

async function ActivationPage({ params }: Props) {
  const result = await activateUser(params.jwt);

  if (result === 'userNotExist') return <p>Użytkownik nie istnieje</p>;

  if (result === 'alreadyActivated')
    return <p>Użytkownik został już aktywowany</p>;

  return <div className='border'>Twoje konto zostało pmyślnie aktywowane!</div>;
}

export default ActivationPage;

import { forgotPassword } from '@/lib/actions/authAction';

interface Props {
  params: {
    jwt: string;
  };
}

async function ResetPasswordPage({ params }: Props) {
  const result = await forgotPassword(params.jwt);

  if (result === 'userNotExist') return <p>Użytkownik nie istnieje</p>;

  if (result === 'error') return <p>Coś poszło nie tak</p>;

  return <p>Twoje konto zostało pmyślnie aktywowane!</p>;
}

export default ResetPasswordPage;

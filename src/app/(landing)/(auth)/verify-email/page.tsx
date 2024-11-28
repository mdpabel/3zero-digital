import VerifyEmailForm from '@/components/auth/verify-email-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Verify email',
});

const VerifyEmail = () => {
  return <VerifyEmailForm />;
};

export default VerifyEmail;

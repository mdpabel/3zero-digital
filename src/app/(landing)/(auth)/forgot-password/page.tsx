import ForgotPasswordForm from '@/components/auth/forgot-password-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Forgot password',
});

const ForgotPassword = () => {
  return <ForgotPasswordForm />;
};

export default ForgotPassword;

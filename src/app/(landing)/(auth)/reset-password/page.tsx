import ResetPasswordForm from '@/components/auth/reset-password-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Reset password',
});

const ResetPassword = () => {
  return <ResetPasswordForm />;
};

export default ResetPassword;

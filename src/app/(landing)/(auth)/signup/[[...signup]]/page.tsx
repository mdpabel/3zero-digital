import SignUpForm from '@/components/auth/sign-up-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Signup',
});

const Signup = () => {
  return <SignUpForm />;
};

export default Signup;

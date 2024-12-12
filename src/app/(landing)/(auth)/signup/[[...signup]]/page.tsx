import SignUpForm from '@/components/auth/sign-up-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Signup',
  url: 'https://www.3zerodigital.com/signup',
});

const Signup = () => {
  return <SignUpForm />;
};

export default Signup;

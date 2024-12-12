import LoginForm from '@/components/auth/login-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Login',
  url: 'https://www.3zerodigital.com/login',
});

const Login = () => {
  return <LoginForm />;
};

export default Login;

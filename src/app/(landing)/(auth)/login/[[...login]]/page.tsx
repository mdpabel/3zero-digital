import LoginForm from '@/components/auth/login-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Login',
  url: '/login',
});

const Login = async () => {
  return <LoginForm />;
};

export default Login;

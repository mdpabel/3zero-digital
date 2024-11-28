import LoginForm from '@/components/auth/login-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Login',
});

const Login = () => {
  return <LoginForm />;
};

export default Login;

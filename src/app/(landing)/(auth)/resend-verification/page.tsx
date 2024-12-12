import { genMetaData } from '@/app/seo';
import UnderDevelopment from '@/components/common/under-development';

export const metadata = genMetaData({
  title: 'Login',
  url: 'https://www.3zerodigital.com/resend-verification',
});

const ResendVerificationLink = () => {
  return <UnderDevelopment />;
};

export default ResendVerificationLink;

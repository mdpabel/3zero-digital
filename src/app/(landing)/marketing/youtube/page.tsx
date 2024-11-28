import UnderDevelopment from '@/components/common/under-development';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/marketing/youtube');

const page = () => {
  return <UnderDevelopment />;
};

export default page;

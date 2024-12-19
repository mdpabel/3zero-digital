import UnderDevelopment from '@/components/common/under-development';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('3d-model-design');

const page = () => {
  return <UnderDevelopment />;
};

export default page;

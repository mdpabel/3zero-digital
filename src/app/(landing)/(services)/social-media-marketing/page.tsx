import UnderDevelopment from '@/components/common/under-development';
import { getServiceMetadata } from '@/app/seo';

export const dynamic = 'force-static';

export const metadata = getServiceMetadata('social-media-marketing');

const page = () => {
  return <UnderDevelopment />;
};

export default page;

import Blogs from '@/components/blog/blogs';
import SearchForm from '@/components/blog/search-form';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Blog',
});

export const dynamic = 'force-static';

type Props = {
  searchParams: Promise<{ page: string; search: string }>;
};

const page = async ({ searchParams }: Props) => {
  const { page, search } = await searchParams;

  return (
    <div>
      <SearchForm />
      <Blogs page={+page} search={search} />
    </div>
  );
};

export default page;

import CheapWebsiteDevelopment from '../cheap-website-development';
import { countries } from './countries';

export async function generateStaticParams() {
  return countries.map((country) => ({
    country,
  }));
}

const page = () => {
  return <CheapWebsiteDevelopment />;
};

export default page;

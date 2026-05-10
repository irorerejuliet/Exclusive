import AboutUsPage from '@/features/aboutDeatails'
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AboutUsPage />
    </Suspense>
  );
}

export default page

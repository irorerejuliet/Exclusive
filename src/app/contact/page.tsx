import ContactDetails from '@/components/contact/ContactDetails'
import { Suspense } from 'react';
const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ContactDetails />
    </Suspense>
  );
}

export default page

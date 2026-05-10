import CartDetails from '@/components/cart/CartDetails'
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<p>Loading cart...</p>}>
      <CartDetails />
    </Suspense>
  );
}

export default page

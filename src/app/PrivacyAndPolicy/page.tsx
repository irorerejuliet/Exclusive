import Policy from "@/components/privacyPolicy/Policy"
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Policy />
    </Suspense>
  );
}

export default page

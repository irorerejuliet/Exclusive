import LoginDetails from "@/features/auth/login/LoginDetails";

// Define the type properly for Next.js 15
type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Use PascalCase for the component name (Page instead of page)
const Page = async ({ searchParams }: PageProps) => {
  // Await the promise to get the actual params
  const resolvedParams = await searchParams;

  // Pass the redirect as a string
  return (
    <LoginDetails redirect={resolvedParams.redirect as string | undefined} />
  );
};

export default Page;

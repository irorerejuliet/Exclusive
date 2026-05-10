import LoginDetails from '@/features/auth/login/LoginDetails'

const page = ({ searchParams }: any) => {
  return <LoginDetails redirect={searchParams?.redirect} />;
};

export default page

import ResetPassword from '../src/components/pages/reset-password';
import Head from 'next/head';

export default function ResetPasswordPage() {
  return (
    <div>
      <Head>
        <title>Job Skill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResetPassword />
    </div>
  );
}

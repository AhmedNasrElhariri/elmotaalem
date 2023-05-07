import Head from 'next/head';
import ForgetPassword from '../src/components/pages/forget-password';

export default function ForgetPasswordPage() {
  return (
    <>
      <Head>
        <title>Forget Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForgetPassword />
    </>
  );
}

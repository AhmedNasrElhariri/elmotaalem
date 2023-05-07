import Head from 'next/head';
import SignIn from '../src/components/pages/signin';

export default function SignInPage() {
  return (
    <div>
      <Head>
        <title>SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </div>
  );
}

import Head from 'next/head';
import Registration from '../src/components/pages/registration';

export default function RegistrationPage() {
  return (
    <div>
      <Head>
        <title>Job Skill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Registration />
    </div>
  );
}

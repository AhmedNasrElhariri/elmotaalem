import Head from 'next/head';
import Error from '../src/components/pages/404';

export default function ErrorPage() {
  return (
    <div>
      <Head>
        <title>404 Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <></>
      <Error />
    </div>
  );
}

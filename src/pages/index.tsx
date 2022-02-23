import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host = context.req.headers.host;
  const IP = context.req.headers['x-real-ip'] || context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress || 'Null';
  return { props: { host, IP } };
};

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage = (props: ServerSideProps) => {
  return (
    <>
      <noscript> ¯\_(ツ)_/¯ </noscript>
      <Head>
        <title>Welcome • {props.host}</title>
        <meta name="description" content="This domain is used for private services. There might be something here in the future but there isn't right now." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="container">
        <main>
          <h1 className="title">
            Welcome to {''}
            <Link href="/">
              <a>{props.host}</a>
            </Link>
          </h1>

          <p>
            This domain is used for private services.
            <br />
            There might be something here in the future but there isn&apos;t right now.
          </p>
        </main>

        <footer>
          <p>
            <span>
              <a href="https://www.farid.cyou/">Return Home</a>
            </span>
          </p>
        </footer>
      </div>

      <noscript> ¯\_(ツ)_/¯ </noscript>
    </>
  );
};

export default Home;

import Head from 'next/head';
import Link from 'next/link';
import { parse } from 'url';
import styles from '../styles/Home.module.css';

export async function getServerSideProps(context) {
  const parsedHost = parse(`https://${context.req.headers.host}`, true);
  const hostname = parsedHost.hostname.replace(/^[^.]+\./g, '');
  return { props: { hostname } };
}

export default function Home({ hostname }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Welcome • {hostname}</title>
        <meta name="description" content="This domain is used for private services. There might be something here in the future but there isn't right now." />
        <link rel="canonical" href={hostname} />
      </Head>

      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            Welcome to {''}
            <Link href="/">
              <a>{hostname}</a>
            </Link>
          </h1>

          <p className={styles.description}>
            This domain is used for private services.
            <br />
            There might be something here in the future but there isn&apos;t right now.
          </p>
        </main>

        <footer>
          <p>
            <a href="https://www.farid.cyou/">Return Home</a>
          </p>
        </footer>
      </div>
    </>
  );
}

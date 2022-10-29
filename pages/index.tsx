import { getProviders, signIn, useSession } from 'next-auth/react';
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

export default function Home({providers}:any) {
    const { data } = useSession();

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        {Object.values(providers).map((provider:any) => {
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}
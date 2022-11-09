import { useSession } from 'next-auth/react';
import Layout from '../components/layout';

export default function Home({ name }: any) {
  const { data } = useSession();

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </Layout>
  );
}

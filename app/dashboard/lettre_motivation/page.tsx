// pages/index.tsx
import Head from 'next/head';
import CoverLetterGenerator from '@/components/CoverLetterGenerator';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Générateur de Lettre de Motivation</title>
      </Head>
      <main>
        <CoverLetterGenerator />
      </main>
    </div>
  );
};

export default Home;

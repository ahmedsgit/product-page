
// internal exports
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen mx-auto antialiased flex justify-between">
      <Head>
        <title>Product Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Side bar */}
      <Sidebar/>
      {/* product part */}
          {/* Rays Restaurant */}
          {/* search */}
          {/* nav */}
          {/* products */}
      {/* cart */}
    </div>
  )
}

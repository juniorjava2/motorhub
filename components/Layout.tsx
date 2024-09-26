// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Automobile Hub - Quality Parts for Every Vehicle</title>
        <meta name="description" content="Find high-quality automobile spare parts for various vehicles. Explore our catalog for the best deals on parts." />
        <meta name="keywords" content="automobile parts, car spare parts, vehicle accessories, auto parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
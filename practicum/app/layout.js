import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import Head from 'next/head';


export const metadata = {
  title: "Andrea Mei Maala Practicum Portfolio",
  description: "Practicum Portfolio for CS PRACTICUM CS199F C54",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <body>{children}</body>
    </html>
  );
}

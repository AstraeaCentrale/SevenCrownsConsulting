import Head from "next/head";
import { Metadata } from "next";
// import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { Inter } from "next/font/google";
import client from "@/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type ConnectionStatus = {
  isConnected: boolean;
};

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sevencrownsconsulting.vercel.app"),
  title: "test app",
  description: "test app",
  // alternates: {
  //   canonical: 'https://example.com',
  //   languages: {
  //     'en-US': 'https://example.com/en-US',
  //     'de-DE': 'https://example.com/de-DE'
  //   }
  // },
  openGraph: {
    title: "test app",
    description: "test app",
    url: "https://sevencrownsconsulting.vercel.app",
    siteName: "test app",
    images: [{ url: "https://astraeacentrale.github.io/assets/images/background/Kaiza_Aga.png" }]
  },
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <Head>
        <title>asdfghjkl;</title>
      </Head>
      <p>hello world!!!</p>
    </main>
  );
}
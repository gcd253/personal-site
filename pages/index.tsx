import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import headshot from "../public/headshot-square.PNG";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Image
            src={headshot}
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-full border-4 border-white hover:scale-[1.03] duration-500"
          />

          <div className="text-white bold font text-5xl font-serif">
            Hi, I'm Griffin
          </div>
        </main>
      </Layout>
    </>
  );
}

import Head from "next/head";
import styles from "@/styles/Home.module.css";
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
        <main className="bg-amber-100 w-full h-full font-sans">
          <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="mt-12 h-96 w-1/3 bg-black rounded-md relative">
              <div className="h-[101%] w-[101%] bg-white border-[6px] border-black items-center -top-3 -left-3 rounded-md absolute flex justify-center text-xl">
                Euclid Circular B!
                <div className="absolute flex flex-row gap-2 bottom-2 left-2">
                  <div className="bg-blue-400 h-4 w-4 rounded-full"></div>
                  <div className="bg-blue-400 h-4 w-4 rounded-full"></div>
                  <div className="bg-blue-400 h-4 w-4 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bg-purple-400 h-4 w-12 -right-16"></div>
              <div className="absolute bg-purple-400 h-4 w-12 -right-[3.2rem] -top-12 -rotate-45"></div>
              <div className="absolute bg-purple-400 h-12 w-4 right-4 -top-20"></div>

            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

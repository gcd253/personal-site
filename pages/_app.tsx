import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

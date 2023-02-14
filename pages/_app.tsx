import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Euclid from "@next/font/local";

const euclid = Euclid({
  src: '../assets/euclid-circular-b-cufonfonts/Euclid Circular B Bold.ttf',
  variable: "--font-euclid",
  display: "swap"
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${euclid.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

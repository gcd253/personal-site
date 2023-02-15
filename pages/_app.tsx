import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Euclid from "@next/font/local";

const euclid = Euclid({
  src: [
    {
      path: '../assets/euclid-circular-b-cufonfonts/Euclid Circular B Bold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/euclid-circular-b-cufonfonts/Euclid Circular B SemiBold.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/euclid-circular-b-cufonfonts/Euclid Circular B Medium.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/euclid-circular-b-cufonfonts/Euclid Circular B Light.ttf',
      weight: '300',
      style: 'normal'
    },
  ],
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

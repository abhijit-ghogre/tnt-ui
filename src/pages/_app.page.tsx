import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "@next/font/google";

const font = Raleway({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}

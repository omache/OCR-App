import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Scrolling from "@/components/Scrolling";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  varivale: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <div className="flex">
          <div className="w-16">
            <Scrolling className="h-screen mt-16 mb-16 fixed left-0 top-0" />
            {/* Adjust the 'h-screen', 'mt-16', 'mb-16', 'fixed', 'left-0', and 'top-0' classes for the desired size and positioning */}
          </div>
          <div className="flex-grow ml-16">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

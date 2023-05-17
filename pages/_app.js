import "../styles/globals.css";
import { Inter_Tight } from "@next/font/google";

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter_tight",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter_tight.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

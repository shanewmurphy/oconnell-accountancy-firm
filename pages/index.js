import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Narbar";
import NavbarMobile from "../components/Navbar-mobile";
import Hero from "../components/Hero";
import Businesses from "../components/Businesses";
import Services from "../components/Services";
import Zoom from "../components/Zoom";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="page_wrapper">
          <div>
            <Navbar />
          </div>
          <div>
            <NavbarMobile />
          </div>
          <div>
            <Hero />
          </div>
          <div>
            <Businesses />
          </div>
          <div>
            <Services />
          </div>
          <div>
            <Zoom />
          </div>
        </div>
      </main>
    </div>
  );
}

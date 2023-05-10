import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-between mt-12">
      <div className="hero_col">
        <h1 className="xl:text-5xl lg:text-4xl md:text-2xl sm:text-3xl text-beige font-bold leading-10 antialiased mb-3">
          Maximise Your Financial Potential with Expert Accounting and Tax
          Consulting
        </h1>
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-xl w-10/12 sm:w-11/12 text-white font-semibold antialiased">
          Get Expert Tax Advice from the Comfort of Your Own Home
        </h2>
        <div className="lg:mt-8 md:mt-4 sm:mt-8 sm:mb-16">
          <button className="bg-beige pl-9 pr-9 sm:pl-10 sm:pr-10 pt-4 pb-4 rounded-full lg:text-2xl md:text-xl sm:text-base text-green font-bold antialiased">
            Book Your Zoom Consultation
          </button>
        </div>
      </div>
      <div className="hero_col">
        <div className="image_container">
          <Image
            className="hero_conatiner_img"
            src="/imgs/Hero.png"
            width={359}
            height={359}
            alt="Book Your Zoom Consultation"
          />
        </div>
      </div>
    </div>
  );
}

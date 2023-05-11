import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between mt-12 lg:mb-60 md:mb-10 gap-20">
      <div className="xl:basis-8/12 lg:basis-6/12 md:basis-8/12">
        <h1 className="xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl text-beige font-bold leading-10 antialiased lg:mb-3 md:mb-4 sm:mb-4">
          Maximise Your Financial Potential with Expert Accounting and Tax
          Consulting
        </h1>
        <h2 className="xl:text-3xl lg:text-2xl md:text-3xl sm:text-xl xl:w-9/12  text-white font-semibold antialiased md:mb-12">
          Get Expert Tax Advice from the Comfort of Your Own Home
        </h2>
        <div className="lg:mt-8 md:mt-4 sm:mt-8">
          <button className="bg-beige lg:pl-9 lg:pr-9 lg:pt-4 lg:pb-4 md:pl-24 md:pr-24 md:pt-8 md:pb-8 sm:pl-8 sm:pr-8 sm:pt-4 sm:pb-4 rounded-full lg:text-2xl md:text-3xl sm:text-base text-green font-bold antialiased">
            Book Your Zoom Consultation
          </button>
        </div>
      </div>
      <div className="xl:basis-4/12 lg:basis-4/12 md:basis-3/12 mb-20">
        <div className="lg:float-right lg:block md:hidden sm:block">
          <Image
            className="hero_conatiner_img"
            src="/imgs/Hero.png"
            width={359}
            height={359}
            alt="Book Your Zoom Consultation"
          />
        </div>
        <div className="lg:hidden md:block sm:hidden">
          <Image
            src="/imgs/Hero_tablet.png"
            width={645}
            height={645}
            alt="Book Your Zoom Consultation"
          />
        </div>
      </div>
    </div>
  );
}

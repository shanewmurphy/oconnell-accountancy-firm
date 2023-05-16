import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between mt-12 lg:mb-60 md:mb-40 sm:mb-36 gap-14">
      <div className="xl:basis-8/12 lg:basis-6/12 md:basis-8/12">
        <h1 className="xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl text-beige font-bold leading-10 antialiased lg:mb-3 md:mb-4 sm:mb-4">
          Maximise Your Financial Potential with Expert Accounting and Tax
          Consulting
        </h1>
        <h2 className="xl:text-3xl lg:text-2xl md:text-3xl sm:text-xl xl:w-9/12  text-white font-semibold antialiased md:mb-12">
          Get Expert Tax Advice from the Comfort of Your Own Home
        </h2>
        <div className="mt-8">
          <button className="bg-beige hover:bg-transparent hover:text-beige hover:outline hover:outline-1 lg:px-16 lg:py-5 md:px-16 md:py-5 sm:px-11 sm:py-4 rounded-full lg:text-2xl md:text-2xl sm:text-base text-green font-bold antialiased">
            Book Your Zoom Consultation
          </button>
        </div>
      </div>
      <div className="xl:basis-4/12 lg:basis-4/12 md:basis-3/12">
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

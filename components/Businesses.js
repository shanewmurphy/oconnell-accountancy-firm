import Image from "next/image";
export default function Services() {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between lg:mb-60 md:mb-40 sm:mb-36 gap-14">
      <div className="xl:basis-8/12 lg:basis-6/12 md:basis-8/12">
        <h1 className="xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl text-beige font-bold leading-10 antialiased mb-3">
          Whether you&apos;re an
          <span className="text-turquoise"> individual taxpayer</span>,
          <span className="text-turquoise"> small business owner</span>, or
          <span className="text-turquoise"> large corporation</span>
        </h1>
        <p className="text-white font-medium lg:text-lg md:text-2xl sm:text-base antialiased">
          With our commitment to excellence and customer service, you can trust
          us to deliver the results you need to thrive in today&apos;s complex
          financial landscape.
        </p>
      </div>
      <div className="xl:basis-4/12 lg:basis-4/12 md:basis-3/12">
        <div className="service_img_container">
          <Image
            src="/imgs/service-group-min.png"
            width={463}
            height={299}
            alt="services we provide"
          />
        </div>
      </div>
    </div>
  );
}

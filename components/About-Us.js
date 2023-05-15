import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between mt-12 lg:mb-60 md:mb-40 sm:mb-36 gap-14">
      <div className="basis-3/6">
        <h1 className="xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl text-beige font-bold leading-relaxed antialiased mb-3">
          With over
          <span className="text-turquoise pl-2">20 years</span> of experience in
          the industry
        </h1>
        <p className="text-white font-medium lg:text-lg md:text-2xl sm:text-base leading-relaxed antialiased">
          Over the years, our business grew, and we expanded our services to
          include more specialised tax consulting and financial advisory
          services. We also started offering our services online, allowing us to
          reach clients across Ireland and beyond.
        </p>
      </div>
      <div className="basis-3/6">
        <div className="service_img_container">
          <Image
            src="/imgs/Office_B-min.png"
            width={464}
            height={280}
            alt="office galway"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Services() {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between mt-12 lg:mb-60 md:mb-40 sm:mb-36 gap-14">
      <div className="xl:basis-8/12 lg:basis-6/12 md:basis-8/12">
        <h1 className="xl:text-5xl lg:text-4xl md:text-5xl sm:text-3xl text-beige font-bold leading-10 antialiased mb-3">
          We offer a wide range of services designed to support your success
        </h1>
        <p className="text-white font-medium lg:text-lg md:text-2xl sm:text-base antialiased">
          From tax preparation and bookkeeping to financial planning and
          business advisory services, we offer a wide range of services designed
          to support your success.
        </p>
        <div className="mt-4 lg:inline-flex md:inline-flex sm:hidden">
          <div>
            <ul className="lg:inline-flex md:inline-flex sm:inline-flex">
              <li className="pr-2">
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  Tax Compliance
                </h3>
              </li>
              <li className="pr-2">
                <h3 className="outline_tags_large outline outline-1 outline-white text-sm font-medium antialiased">
                  Small Business Accounting
                </h3>
              </li>
              <li>
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  Corporate Tax
                </h3>
              </li>
            </ul>
            <ul className="lg:inline-flex md:inline-flex sm:inline-flex mt-2">
              <li className="pr-2">
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  Personal Tax
                </h3>
              </li>
              <li className="pr-2">
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  Payroll Processing
                </h3>
              </li>
              <li>
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  International Tax
                </h3>
              </li>
            </ul>
            <ul className="lg:inline-flex md:inline-flex sm:inline-flex mt-2">
              <li className="pr-2">
                <h3 className="outline_tags_large outline outline-1 outline-white text-sm font-medium antialiased">
                  Personal Tax
                </h3>
              </li>
              <li className="pr-2">
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  Payroll Processing
                </h3>
              </li>
              <li>
                <h3 className="outline_tags outline outline-1 outline-white text-sm font-medium antialiased">
                  International Tax
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="xl:basis-4/12 lg:basis-4/12 md:basis-3/12">
        <div className="service_img_container">
          <Image
            src="/imgs/charts-min.png"
            width={463}
            height={299}
            alt="services we provide"
          />
        </div>
      </div>
    </div>
  );
}

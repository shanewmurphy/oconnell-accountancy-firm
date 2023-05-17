import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-deepgreen lg:px-20 lg:py-14 md:px-14 md:py-14 sm:px-8 sm:py-14">
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
        <div>
          <div>
            <Image
              src="/imgs/Logo_footer_sm.svg"
              width={201}
              height={64}
              alt="logo"
            />
          </div>
          <p className="font-semibold text-xl text-white mt-4 antialiased">
            (091) 511 400
          </p>
          <a className="text-white text-base antialiased">
            info@oconnellaccountants.com
          </a>
        </div>
        <div className="lg:mt-0 md:mt-0 sm:mt-6">
          <address className="not-italic font-medium text-white text-sm antialiased">
            <strong className="text-base antialiased">Gray Office Park,</strong>
            <br />
            Headford Rd, <br />
            Galway, <br />
            H91 C3N1
          </address>
          <div className="mt-4">
            <ul className="inline-flex items-center">
              <li>
                <Image
                  src="/imgs/Twitter_icon.svg"
                  width={20}
                  height={17}
                  alt="twiiter logo"
                />
              </li>
              <li className="pl-2">
                <Image src="/imgs/LinkedIn_icon.svg" width={18} height={17} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full bg-deepgreen lg:px-20 lg:py-14 md:px-14 md:py-14 sm:px-8 sm:py-12">
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
            <span className="text-base pr-1">Call:</span>(091) 511 400
          </p>
          <div className="text-white text-base font-semibold antialiased">
            <span className="text-base pr-1">Email:</span>
            <Link href="mailto:info@oconnellaccountants.com">
              <button className="text-white hover:text-beige">
                info@oconnellaccountants.com
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:mt-0 md:mt-0 sm:mt-6">
          <address className="not-italic font-medium text-white lg:text-base md:text-sm sm:text-xl antialiased">
            <strong className="lg:text-base md:text-base sm:text-xl antialiased">
              Gray Office Park,
            </strong>
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
                  alt="twitter logo"
                />
              </li>
              <li className="pl-2">
                <Image
                  src="/imgs/LinkedIn_icon.svg"
                  width={18}
                  height={17}
                  alt="linkedIn icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end border-t-2 border-teal-800 mt-6">
        <div className="text-white text-sm mt-2 antialiased">
          <Link href="http://shanemurphy.design" target="blank">
            <button className="text-white hover:text-beige cursor-pointer">
              Made by Shane
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

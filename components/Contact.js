import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <div
      className="lg:w-10/12 md:w-full sm:w-full mx-auto bg-deepgreen rounded-xl py-10 px-6 lg:mb-60 md:mb-40 sm:mb-36 antialiased"
      id="Contact-Us"
    >
      <div className="max-w-xl mx-auto text-center">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-beige font-bold lg:mb-4 md:mb-4 sm:mb-4 antialiased">
          We&apos;d love to hear from you!
        </h1>
        <h3 className="max-w-xl mx-auto lg:text-xl md:text-xl sm:text-sm text-white font-semibold lg:mb-2 md:mb-2 sm:mb-4 leading-relaxed antialiased">
          If you have any questions, please do not hesitate to send us an email
          with you&apos;re inquiry
        </h3>
        <Link href="mailto:info@oconnellaccountants.com">
          <button className="mt-3 lg:px-24 lg:py-3 md:px-24 md:py-4 sm:px-24 sm:py-4 rounded-lg bg-beige lg:text-2xl md:text-2xl sm:text-xl text-green font-bold hover:bg-transparent hover:outline lg:hover:outline-1 md:hover:outline-1 sm:hover:outline-2 hover:outline-beige hover:text-beige antialiased">
            Email Us
          </button>
        </Link>
        <div className="w-48 mx-auto lg:mt-6 md:mt-6 sm:mt-4">
          <p className="flex items-center text-white text-center font-semibold text-2xl">
            <span className="inline-flex justify-self-center text-center pr-2">
              <Image
                className="items-center"
                src="/imgs/Call_icon.svg"
                width={30}
                height={30}
                alt="call icon"
              />
            </span>
            (091) 511 400
          </p>
        </div>
        <p className="text-white mt-6 max-w-xl mx-auto font-medium lg:text-xl md:text-xl sm:text-sm leading-relaxed antialiased">
          To reduce the time he spends on financial management and focus on
          other areas of your business
        </p>
      </div>
    </div>
  );
}

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Inter_Tight } from "@next/font/google";
const inter_tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter_tight",
});
const Tips = [
  {
    id: "01",
    title: "Test your equipment",
    tip: "Before your scheduled Zoom call, ensure that your equipment is working correctly, including your camera, microphone, and speakers. Test your internet connection to make sure it is stable.",
  },
  {
    id: "02",
    title: "Gather necessary documents",
    tip: "Collect all the necessary documents and information you may need during the call, such as your tax returns, bank statements, and any receipts",
  },
  {
    id: "03",
    title: "Be ready to discuss your financial situation",
    tip: "Think about the questions you want to ask your accountant or tax consultant ahead of time. Be prepared to discuss your financial situation, including any income, expenses, and investments",
  },
  {
    id: "04",
    title: "Make a list of your goals",
    tip: "Make a list of your financial goals and objectives, both short-term and long-term. This will help guide your conversation with your accountant or tax consultant and ensure that you get the most out of your call.",
  },
];
export default function Zoom() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="lg:mb-60 md:mb-40 sm:mb-36" id="CTA-book-call">
      <div className="container mx-auto">
        <h1 className="text-center xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl text-beige font-bold leading-10 antialiased">
          Book a Zoom call now
        </h1>
        <h2 className="text-center mx-auto max-w-3xl text-beige xl:text-4xl lg:text-3xl md:text-4xl sm:text-xl font-bold lg:mt-2 md:mt-2 sm:mt-1 antialiased">
          Get expert financial advice from the comfort of your own home
        </h2>
        <p className="text-white mt-2 max-w-3xl text-center font-medium mx-auto lg:text-lg md:text-2xl sm:text-base antialiased">
          Whether you have questions about filing your taxes, managing your
          business finances, or need help with tax planning, we have the
          expertise and knowledge to help
        </p>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col mt-6 gap-14">
        <div className="basis-3/6">
          <div>
            <Image
              className="rounded-lg profile_imgs_container"
              src="/imgs/John_B-min.jpg"
              width={559}
              height={300}
              alt="john accountant"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="mt-3 font-bold text-beige text-2xl antialiased">
                John O&apos;Connell
              </h3>
            </div>
            <div>
              <h4 className="mt-3 font-semibold text-turquoise text-2xl antialiased">
                €45/
                <span className="font-medium text-beige text-lg antialiased">
                  25mins
                </span>
              </h4>
            </div>
          </div>
          <div className="flex justify-center lg:mt-6 md:mt-4 sm:mt-8">
            <Link
              href="https://cal.com/john-o-connell-bookings/zoom-call-with-john?duration=25"
              target="blank"
            >
              <button className="outline lg:outline-1 md:outline-1 sm:outline-2 hover:bg-beige hover:text-deepgreen hover:outline-0 max-w-lg lg:px-20 lg:py-4 md:px-10 md:py-4 sm:px-9 sm:py-4 rounded-full outline-beige text-center text-beige lg:text-xl md:text-base sm:text-xl font-semibold antialiased">
                Book Video Call with John
              </button>
            </Link>
          </div>
          <div className="flex justify-center lg:mt-6 md:mt-4 sm:mt-8">
            <button
              type="button"
              onClick={openModal}
              className="text-turquoise font-semibold text-sm underline decoration-solid antialiased"
            >
              Tips on Zoom Preparation
            </button>
            <>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>
                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="lg:w-2/3 md:11/12 sm:w-11/12  lg:py-16 md:py-10 sm:py-8 transform overflow-hidden rounded-2xl bg-deepgreen p-6 text-center align-middle shadow-xl transition-all">
                          <div className={`${inter_tight.variable} font-sans`}>
                            <Dialog.Title
                              as="h3"
                              className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-white mb-4 antialiased"
                            >
                              Zoom Preparation Tips
                            </Dialog.Title>
                          </div>
                          <ul>
                            {Tips.map((Tips) => {
                              return (
                                <li key={Tips.id}>
                                  <div
                                    className={`${inter_tight.variable} font-sans`}
                                  >
                                    <div className="mt-2">
                                      <h4 className="font-bold lg:text-2xl md:text-2xl sm:text-xl text-beige antialiased">
                                        {Tips.title}
                                      </h4>
                                      <p className="lg:w-9/12 md:11/12 sm:w-11/12 mx-auto lg:text-base md:text-base sm:text-sm text-white font-medium mb-6">
                                        {Tips.tip}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          <div className={`${inter_tight.variable} font-sans`}>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-beige px-10 py-2 text-sm font-medium text-green hover:bg-transparent hover:text-beige hover:outline hover:outline-1 hover:outline-beige"
                                onClick={closeModal}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </>
          </div>
          <div className="lg:mt-6 md:mt-8 sm:mt-8">
            <p className="text-white text-base font-medium leading-relaxed antialiased">
              John has over 20 years of experience as a CPA, specialising in tax
              consulting for small businesses and individual clients. He
              graduated from the University of Galway with a Bachelor&apos;s
              degree in Accounting and Finance, and he also holds a
              Master&apos;s degree in Taxation from the University of Limerick.
            </p>
          </div>
        </div>
        <div className="basis-3/6 lg:mt-0 md:mt-0 sm:mt-8">
          <div>
            <Image
              className="rounded-lg profile_imgs_container"
              src="/imgs/Sarah_Profile.jpg"
              width={559}
              height={300}
              alt="Sarah accountant"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="mt-3 font-bold text-beige text-2xl antialiased">
                Sarah Byrne
              </h3>
            </div>
            <div>
              <h4 className="mt-3 font-semibold text-turquoise text-2xl antialiased">
                €45/
                <span className="font-medium text-beige text-lg antialiased">
                  25mins
                </span>
              </h4>
            </div>
          </div>
          <div className="flex justify-center lg:mt-6 md:mt-6 sm:mt-8">
            <Link
              href="https://cal.com/john-o-connell-bookings/zoom-call-with-sarah?duration=25"
              target="blank"
            >
              <button className="outline lg:outline-1 md:outline-1 sm:outline-2 hover:bg-beige hover:text-deepgreen hover:outline-0 max-w-lg lg:px-20 lg:py-4 md:px-10 md:py-4 sm:px-9 sm:py-4 rounded-full outline-beige text-center text-beige lg:text-xl md:text-base sm:text-xl font-semibold antialiased">
                Book Video Call with Sarah
              </button>
            </Link>
          </div>
          <div className="flex justify-center lg:mt-6 md:mt-4 sm:mt-8">
            <button
              type="button"
              onClick={openModal}
              className="text-turquoise font-semibold text-sm underline decoration-solid antialiased"
            >
              Tips on Zoom Preparation
            </button>
          </div>
          <div className="lg:mt-6 md:mt-8 sm:mt-8">
            <p className="text-white text-base font-medium leading-relaxed antialiased">
              Sarah has over 12 years of experience as a chartered accountant,
              specialising in financial reporting and analysis for small and
              medium-sized businesses. She graduated from the National
              University of Ireland, Galway with a Bachelor&apos;s degree in
              Commerce, and she also holds a Master&lsquo;s degree in Accounting
              and Finance from the same university.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

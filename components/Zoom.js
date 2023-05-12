import Image from "next/image";
export default function Zoom() {
  return (
    <div className="lg:mb-60 md:mb-40 sm:mb-36">
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
          <div className="flex justify-center lg:mt-4 md:mt-4 sm:mt-8">
            <button className="outline outline-1 max-w-lg px-10 py-4 rounded-full outline-beige text-center text-beige lg:text-xl md:text-base font-semibold antialiased">
              Book €45 Zoom Call with John
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <a className="text-turquoise font-semibold text-sm underline decoration-solid antialiased">
              Tips on Zoom Preparation
            </a>
          </div>
          <div className="lg:mt-3 md:mt-8 sm:mt-8">
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
          <div className="flex justify-center lg:mt-4 md:mt-4 sm:mt-8">
            <button className="outline outline-1 max-w-lg px-10 py-4 rounded-full outline-beige text-center text-beige lg:text-xl md:text-base font-semibold antialiased">
              Book €45 Zoom Call with Sarah
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <a className="text-turquoise font-semibold text-sm underline decoration-solid antialiased">
              Tips on Zoom Preparation
            </a>
          </div>
          <div className="lg:mt-3 md:mt-8 sm:mt-8">
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

import Image from "next/image";
export default function NavbarMobile() {
  return (
    <div className="flex justify-between items-center lg:invisible md:invisible sm:visible mt-8">
      <div className="">
        <Image src="/imgs/Logo_mobile.svg" width={36} height={36} alt="logo" />
      </div>
      <div className="bg-white px-4 py-2 text-deepgreen rounded-md font-bold antialiased">
        Call (091) 511 400
      </div>
    </div>
  );
}

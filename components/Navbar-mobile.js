import Image from "next/image";
export default function NavbarMobile() {
  return (
    <div className="lg:invisible md:invisible sm:visible mt-2">
      <div>
        <Image src="/imgs/Logo_mobile.svg" width={36} height={36} alt="logo" />
      </div>
    </div>
  );
}

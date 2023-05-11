import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex justify-between lg:mt-5 md:mt-6 lg:visible md:visible lg:flex md:flex sm:hidden">
      <div>
        <nav>
          <ul className="inline-flex items-center">
            <div>
              <Image
                src="./imgs/Logo_Desktop.svg"
                width={36}
                height={36}
                alt="Logo"
              />
            </div>
            <li className="pl-4 text-white text-base font-semibold antialiased">
              Home
            </li>
            <li className="pl-4 text-white text-base font-semibold antialiased">
              Services
            </li>
            <li className="pl-4 text-white text-base font-semibold antialiased">
              About Us
            </li>
            <li className="pl-4 text-white text-base font-semibold antialiased">
              FAQs
            </li>
          </ul>
        </nav>
      </div>
      <div>BB</div>
    </div>
  );
}

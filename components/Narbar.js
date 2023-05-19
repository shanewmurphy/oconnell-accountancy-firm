import Image from "next/image";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center lg:mt-5 md:mt-6 lg:visible md:visible lg:flex md:flex sm:hidden">
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
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="pl-4 text-white text-base font-semibold hover:text-beige cursor-pointer antialiased">
                Services
              </li>
            </Link>
            <Link
              to="About-Us"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="pl-4 text-white text-base font-semibold hover:text-beige cursor-pointer antialiased">
                About Us
              </li>
            </Link>
            <Link to="FAQ" spy={true} smooth={true} offset={-50} duration={500}>
              <li className="pl-4 text-white text-base font-semibold hover:text-beige cursor-pointer antialiased">
                FAQs
              </li>
            </Link>
            <Link
              to="Contact-Us"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="pl-4 text-white text-base font-semibold hover:text-beige cursor-pointer antialiased">
                Contact Us
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="bg-white rounded-md py-2 px-8 text-deepgreen font-bold antialiased">
        Call (091) 511 400
      </div>
    </div>
  );
}

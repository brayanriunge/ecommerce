import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.jpeg";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart, FaStoreAlt } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Navbar() {
  const flexBetween = "flex justify-between items-center";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div
      className={`${flexBetween} fixed top-0 py-6 shadow bg-cyan-400 w-full z-30`}
    >
      <div className={`${flexBetween} mx-auto 5/6`}>
        <div className={`${flexBetween} gap-60 w-full `}>
          {/* on the left */}
          <div className="p-2 ">
            <Link href={"/"} className="flex justify-start items-center gap-4 ">
              {/* <Image
                src={Logo}
                alt="logo"
                height={20}
                width={60}
                className="rounded-full justify-items-start"
              /> */}
              <FaStoreAlt className="h-8 w-8" />
              <h1 className="text-2xl bold ">EpicStore</h1>
            </Link>
          </div>

          {/* on the right */}
          {isAboveMediaScreens ? (
            <div className={`${flexBetween} w-full gap-14`}>
              <div className={`${flexBetween} text-lg  p-4  gap-8`}>
                <Link legacyBehavior href={"/"}>
                  <a className="text-lg"> Home</a>
                </Link>
                <Link legacyBehavior href={"/cart"}>
                  <a className="text-lg flex items-center gap-2">
                    Cart
                    <span>
                      <FaShoppingCart />
                    </span>
                  </a>
                </Link>

                <Link legacyBehavior href={"/contactus"}>
                  <a className="text-lg">Contact Us</a>
                </Link>
                <Link legacyBehavior href={"/aboutus"}>
                  <a className="text-lg">About us</a>
                </Link>
              </div>
              <div className="p-2">
                <button className="bg-orange-600 p-2 rounded-lg">Login</button>
              </div>
            </div>
          ) : (
            <button>
              <HiMenu />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

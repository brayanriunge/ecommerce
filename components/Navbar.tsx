import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.jpeg";
import { HiMenu } from "react-icons/hi";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Navbar() {
  const flexBetween = "flex justify-between items-center";
  const isAboveMediaScreens = useMediaQuery("min-width: 1060px");
  return (
    <div
      className={`${flexBetween} fixed top-0 py-6 shadow bg-slate-400 w-full z-30`}
    >
      <div className={`${flexBetween} mx-auto 5/6`}>
        <div className={`${flexBetween} gap-16 w-full`}>
          {/* on the left */}
          <Image
            src={Logo}
            alt="logo"
            height={20}
            width={50}
            className="rounded-full flex-start"
          />
          <h1 className="text-2xl bold text-blue">EpicStore</h1>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} text-lg gap-8`}>
              <Link legacyBehavior href={"/"}>
                <a className="text-lg"> Home</a>
              </Link>
              <Link legacyBehavior href={"/cart"}>
                <a className="text-lg"> Cart</a>
              </Link>
            </div>
          </div>

          {/* on the right */}
          {/* {isAboveMediaScreens ? (
           
          ) : (
            <button>
              <HiMenu />
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}

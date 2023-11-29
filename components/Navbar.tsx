import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.jpeg";

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
            height={70}
            width={20}
            className="rounded-full"
          />
          <h1 className="text-2xl bold text-blue">EpicStore</h1>

          {/* on the right */}
          {isAboveMediaScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} text-lg gap-8`}>
                <Link legacyBehavior href={"/home"}>
                  <a className="text-lg"> Home</a>
                </Link>
                <Link legacyBehavior href={"/cart"}>
                  <a className="text-lg"> Cart</a>
                </Link>
              </div>
            </div>
          ) : (
            <button></button>
          )}
        </div>
      </div>
    </div>
  );
}

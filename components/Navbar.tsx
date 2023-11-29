import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.jpeg";

export default function Navbar() {
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("min-width: 720px");
  return (
    <div className={`${flexBetween} fixed top-0 py-6 z-30`}>
      <div className={`${flexBetween} mx-auto 5/6`}>
        <div className={`${flexBetween} gap-16 w-full`}>
          {/* on the left */}
          <Image src={Logo} alt="logo" className="rounded-full" />
          <p className="text-2xl bold text-blue">EpicStore</p>
          {/* on the right */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} text-lg gap-8`}>
                <Link legacyBehavior href={"/cart"}>
                  <a href=""> Cart</a>
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

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Navbar() {
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("min-width: 720px");
  return (
    <div className={`${flexBetween} fixed top-0 py-6 z-30`}>
      <div className={`${flexBetween} `}></div>
    </div>
  );
}

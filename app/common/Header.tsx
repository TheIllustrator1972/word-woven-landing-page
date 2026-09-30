import Link from "next/link";
import SocialIcons from "./Contact/SocialIcons";

const Header = () => {
  return (
    <div className="mt-4 flex w-[90%] flex-col justify-between gap-4 sm:mt-6 md:mt-10 md:w-[80%] md:flex-row md:items-center md:gap-4 lg:w-[70%]">
      <Link href="/" className="flex items-center gap-3 sm:gap-4">
        <img
          src="/AppLogo/AppLogo.png"
          className="h-6 w-6 rounded-[22%] object-cover sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          alt="Word Woven logo"
        />
        <h2 className="text-xl font-medium tracking-wide sm:text-2xl md:text-3xl">
          <span className="text-word-mint">Word</span>{" "}
          <span className="text-word-tile">Woven</span>
        </h2>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/privacy"
          className="text-sm text-light-app-name-text underline underline-offset-4 hover:opacity-80 sm:text-base"
        >
          Privacy
        </Link>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Header;

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hidden md:flex items-center gap-x-2 transition hover:opacity-75">
        <Image src={"/logo.svg"} alt="Logo" height={30} width={30} />
        <p
          className={cn("pb-1 text-lg text-neutral-700", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

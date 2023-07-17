import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex sm:gap-x-16 gap-x-4 text-3xl sm:text-4xl">
      <Link
        href="/"
        className="flex items-center hover:underline hover:underline-offset-8 transition hover:text-red-400/80"
      >
        <Image
          src="/images/navbar/hacker-cat.svg"
          width={69}
          height={69}
          alt="Home Icon"
        />
        Home
      </Link>
      <Link
        href="/history"
        className="flex items-center hover:underline hover:underline-offset-8 transition hover:text-red-400/80"
      >
        <Image
          src="/images/navbar/spider-web.svg"
          width={69}
          height={69}
          alt="History Icon"
        />
        History
      </Link>
    </nav>
  );
}

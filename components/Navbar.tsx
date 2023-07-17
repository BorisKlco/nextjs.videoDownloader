import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-x-16">
      <Link
        href="/"
        className="flex items-center text-4xl hover:underline hover:underline-offset-8 transition hover:text-red-400/80"
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
        className="flex items-center text-4xl hover:underline hover:underline-offset-8 transition hover:text-red-400/80"
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

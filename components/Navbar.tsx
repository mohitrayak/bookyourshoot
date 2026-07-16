import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-400">Book</span> Your Shoot
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/photographer" className="hover:text-yellow-400 transition">
              Photographers
            </Link>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Categories
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">

          <Link
            href="/login"
            className="rounded-full border border-yellow-400 px-5 py-2 hover:bg-yellow-400 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black hover:scale-105 transition"
          >
            Sign Up
          </Link>

        </div>

      </nav>
    </header>
  );
}
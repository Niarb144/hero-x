import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logos/logo.png"
            alt="Hero-X Logo"
            className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-white font-medium">
          {["Search", "Versus"].map((item) => (
            <li key={item} className="relative group">
              <Link
                href={`/${item.toLowerCase()}`}
                className="transition-colors duration-300 group-hover:text-blue-400"
              >
                {item}
              </Link>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-cente md:flex md:justify-between">
        <button className="md:hidden justify-self-start text-3xl border-0 bg-transparent p-0 leading-none text-gray-600">
          ☰
        </button>
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-6 sm:h-9 md:h-10 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#" className="text-pink-500 font-semibold transition">
            Home
          </a>
          <a href="#" className="hover:text-pink-500 hover:font-semibold transition">
            Technologies
          </a>
          <a href="#" className="hover:text-pink-500 hover:font-semibold transition">
            Projects
          </a>
          <a href="#" className="hover:text-pink-500 hover:font-semibold transition">
            About
          </a>
          <a href="#" className="hover:text-pink-500 hover:font-semibold transition">
            Contact
          </a>
        </div>
        <div className="flex items-center justify-self-end gap-2 sm:gap-3 md:gap-4">
          <button className="font-medium whitespace-nowrap text-[10px] sm:text-sm md:text-base bg-transparent border-0">
            Sign In
          </button>
          <button className="bg-brand-gradient text-white px-2 sm:px-4 md:px-5 py-1 rounded-full font-medium whitespace-nowrap text-[10px] sm:text-sm md:text-base">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

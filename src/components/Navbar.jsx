import { useState } from "react";
import logo from "../assets/logo-text.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 relative flex items-center justify-between">
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl border-0 bg-transparent p-0 justify-self-start"> ☰ </button>
       <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
         <img src={logo} alt="Dev Stack Logo" className="h-9 sm:h-10 w-auto"/>
        </div>
        <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-pink-500 font-medium">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <button className="font-medium whitespace-nowrap text-sm md:text-base"> Sign In</button>
          <button className="bg-brand-gradient text-white px-3 py-1.5 md:px-5 rounded-full font-medium whitespace-nowrap text-sm md:text-base">Sign Up</button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-100 shadow-sm">
          <a href="#" className="text-pink-500 font-medium">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
)}
    </nav>
  );
};

export default Navbar;
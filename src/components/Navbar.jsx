import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center md:flex md:justify-between">
        <button className="md:hidden text-2xl border-0 bg-transparent p-0"> ☰ </button>
       <div className="flex justify-center md:justify-start">
         <img src={logo} alt="Dev Stack Logo" className="h-10 w-auto"/>
        </div>
        <div className="hidden md:flex items-center gap-8">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <button className="font-medium whitespace-nowrap text-sm md:text-base"> Sign In</button>
          <button className="bg-brand-gradient text-white px-3 py-2 md:px-5 rounded-full font-medium whitespace-nowrap text-sm md:text-base">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
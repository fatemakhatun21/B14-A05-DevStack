import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Dev Stack Logo" className="h-10 w-auto"/>
            <p className="text-gray-400 mt-4">Build your perfect developer stack with modern technologies and tools.</p>
            <div className="flex gap-4 mt-5">
            <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#">Technologies</a> <a href="#">Projects</a> <a href="#">Your Stack</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#">About</a> <a href="#">Contact</a> <a href="#">Careers</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Cookies</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a> <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
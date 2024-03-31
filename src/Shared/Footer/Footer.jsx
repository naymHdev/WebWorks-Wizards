import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex py-8 justify-between items-center">
        <div className="flex flex-col">
          <Link to="/">
            <span className="text-4xl font-semibold">WebWorks Wizards</span>
          </Link>
          <span className="text-sm">Crafting digital magic</span>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/services" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
      <hr />
      <div className="mt-4 text-center text-sm pb-3">
        <span>
          &copy; {new Date().getFullYear()} WebWorks Wizards. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

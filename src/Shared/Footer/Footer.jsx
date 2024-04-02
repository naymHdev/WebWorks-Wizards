import { Link } from "react-router-dom";
import Help from "./Help";

const Footer = () => {
  return (
    <footer className=" bg-slate-900 text-slate-50 pt-16 mt-16">
      <Help />
      <div className=" w-11/12 mx-auto flex py-8 justify-between items-center">
        <div className="flex flex-col">
          <Link to="/">
            <span className="text-4xl font-semibold text-slate-50">
              WebWorks Wizards
            </span>
          </Link>
          <span className="text-sm">Crafting digital magic</span>
        </div>
        <div className="md:flex grid md:space-x-4">
          <a
            href="/"
            className=" text-slate-300 hover:text-slate-50 hover:font-semibold"
          >
            Home
          </a>
          <a
            href="/services"
            className=" text-slate-300 hover:text-slate-50 hover:font-semibold"
          >
            Services
          </a>
          <a
            href="/about"
            className=" text-slate-300 hover:text-slate-50 hover:font-semibold"
          >
            About
          </a>
          <a
            href="/contact"
            className=" text-slate-300 hover:text-slate-50 hover:font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
      <hr />
      <div className="text-center text-sm bg-slate-800 text-slate-50 py-2 font-semibold">
        <span>
          &copy; {new Date().getFullYear()} WebWorks Wizards. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

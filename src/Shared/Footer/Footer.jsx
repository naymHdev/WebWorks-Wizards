import { Link } from "react-router-dom";
import Help from "./Help";

const Footer = () => {
  return (
    <footer className="bg-[#EFEFEF] text-slate-700 py-10">
      <Help />
      <div className=" w-11/12 mx-auto flex py-8 justify-between items-center">
        <div className="flex flex-col">
          <Link to="/">
            <span className="text-4xl font-semibold text-slate-950">
              WebWorks Wizards
            </span>
          </Link>
          <span className="text-sm">Crafting digital magic</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className=" text-slate-700 hover:text-slate-950 hover:font-semibold"
          >
            Home
          </a>
          <a
            href="/services"
            className=" text-slate-700 hover:text-slate-950 hover:font-semibold"
          >
            Services
          </a>
          <a
            href="/about"
            className=" text-slate-700 hover:text-slate-950 hover:font-semibold"
          >
            About
          </a>
          <a
            href="/contact"
            className=" text-slate-700 hover:text-slate-950 hover:font-semibold"
          >
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

import { NavLink } from "react-router-dom";
import Navlink from "./Navlink";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className="bg-slate-50/60 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4 xl:px-0">
        {/* logo */}
        <h1 className="font-bold">
          <NavLink to="/">Raisebe</NavLink>
        </h1>
        {/* menu bar */}
        <img
          src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
          alt="menu bar"
          className="w-5 aspect-square md:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        {/* pages */}
        <ul className="w-1/2 hidden md:flex justify-between">
          <Navlink />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

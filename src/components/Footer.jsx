import Navlink from "../components/Navlink";
import SocialInfo from "./SocialInfo";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="max-w-6xl mx-auto lg:grid grid-cols-5 p-4 xl:px-0 xl:py-8 space-y-8 lg:space-y-0">
        {/* company info */}
        <div className="col-span-2 space-y-4 pr-4 leading-relaxed">
          <h1 className="font-bold">Raisebe</h1>
          <p className="lg:w-2/3">
            We are a comprehensive platform that can help you go digital. Our
            wide range of solutions offer everything you need to promote your
            business , including an online shop, automated daily tasks, business
            analytics, and much more.
          </p>
        </div>
        {/* page */}
        <div className="col-span-1 space-y-4 pr-4">
          <h1 className="font-bold">Company</h1>
          <ul className="space-y-2">
            <Navlink />
          </ul>
        </div>
        {/* program */}
        <div className="col-span-1 space-y-4 pr-4">
          <h1 className="font-bold">Training Programs</h1>
          <ul className="space-y-2">
            <li>Python</li>
            <li>Automation everywhere</li>
          </ul>
        </div>
        {/* social */}
        <div className="col-span-1 space-y-4 pr-4">
          <SocialInfo/>
        </div>
      </div>
      {/* copyright */}
      <h1 className="font-bold max-w-6xl mx-auto p-4 xl:px-0 xl:py-8">
        Copyright {new Date().getFullYear()} Raisebe PVT.LTD.
      </h1>
    </footer>
  );
};

export default Footer;

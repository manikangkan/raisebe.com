import Navlink from "./Navlink";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={`${
        isSidebarOpen && `hidden`
      } lg:hidden mt-14 w-1/2 bg-slate-50/80 backdrop-blur-md fixed top-0 right-0 bottom-0 p-8 z-40
    `}>
      <ul
        className="space-y-8"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Navlink />
      </ul>
      <h1 className="text-xs mx-auto fixed bottom-10">
        Redesign & Developed by{" "}
        <a
          href="github.com/manikangkandas"
          className="font-semibold text-blue-500">
          manikangkandas
        </a>
      </h1>
    </aside>
  );
};

export default Sidebar;

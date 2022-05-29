import { NavLink } from "react-router-dom";

const data = [
  {
    to: "/",
    link: "Home",
  },
  {
    to: "/about",
    link: "About",
  },
  {
    to: "/careers",
    link: "Careers",
  },
  {
    to: "/training",
    link: "Training",
  },
  {
    to: "/contact",
    link: "Contact us",
  },
];

const Navlink = () => {
  return (
    <>
      {data.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? `font-bold` : ``)}>
            {item.link}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default Navlink;

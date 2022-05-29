import { NavLink } from "react-router-dom";

const data = [
  {
    to: "/craft-raisebe-website",
    link: "Home",
  },
  {
    to: "/craft-raisebe-website/about",
    link: "About",
  },
  {
    to: "/craft-raisebe-website/careers",
    link: "Careers",
  },
  {
    to: "/craft-raisebe-website/training",
    link: "Training",
  },
  {
    to: "/craft-raisebe-website/contact",
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

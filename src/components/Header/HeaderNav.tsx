import { Link, useLocation } from "react-router-dom";

type Props = { nav: { link: string; title: string } };

function HeaderNav({ nav }: Props) {
  const { pathname } = useLocation();
  const active = nav.link === pathname;
  return (
    <li
      className={`relative px-1 text-sm font-bold uppercase after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:transform after:bg-primary after:transition-[width_0.3s_ease] after:content-[''] hover:text-primary hover:after:w-full md:mx-4 md:text-base lg:text-2xl ${
        active && "active"
      }`}
    >
      <Link to={nav.link}>{nav.title}</Link>
    </li>
  );
}

export default HeaderNav;

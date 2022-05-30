import { useEffect, useRef } from "react";
import { headerNav } from "../../utils/headerConfig";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import { APP_NAME } from "../../utils/appConfig";

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const headerShrink = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        if (headerRef.current) {
          headerRef.current.classList.add("shrink-header");
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove("shrink-header");
        }
      }
    };

    window.addEventListener("scroll", headerShrink);

    return () => {
      window.removeEventListener("scroll", headerShrink);
    };
  }, []);
  return (
    <header
      className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-center  px-8 md:justify-between"
      ref={headerRef}
      style={{
        transition: "0.3 ease,background-color 0.3s ease",
      }}
    >
      <Link to="/">
        <h1 className="w-full text-3xl">{APP_NAME}</h1>
      </Link>
      <nav className="fixed bottom-0 left-0 h-12 w-full bg-dark py-5 shadow-sm md:static md:top-0 md:left-0 md:w-auto md:bg-transparent">
        <ul className="flex items-center justify-between">
          {headerNav.map((nav, index) => (
            <HeaderNav key={index} nav={nav} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

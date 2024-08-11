import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(isSticky);
  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full z-50 bg-transparent fixed top-0 right-0 duration-300 transition-all ease-in">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base tap-8">
          <Link
            to="/"
            className={`${
              isSticky ? "text-white " : ""
            }text-2xl font-bold text-blue-700 items-center gap-2`}
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          <ul className="md:flex hidden space-x-12">
            {navItem.map((item, idx) => (
              <li key={idx}>
                <Link
                  className={`text-black  text-base inline uppercase cursor-pointer hover:text-blue-700 ${
                    isSticky ? "text-white" : ""
                  }`}
                  to={item.path}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <button className="space-x-12 hidden lg:flex items-center">
            <FaBarsStaggered
              className={`hover:text-blue-700 w-5 ${isSticky ? "text-white" : ""}`}
            />
          </button>
          {/*menu btn for mobile device*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black " />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black " />
              )}
            </button>
          </div>
        </div>
        {/* navitems for sm devices */}
        <div
          className={`space-y-4 duration-500 transition-all ease-in  p-4 mt-16   py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map((item, idx) => (
            <Link
              key={idx}
              className="text-white block   text-base  uppercase cursor-pointer "
              to={item.path}
            >
              {item.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

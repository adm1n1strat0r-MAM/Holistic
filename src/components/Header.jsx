import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav id="home">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          spy={true}
          className="text-red text-3xl font-bold cursor-pointer"
        >
          <img className="w-[200px]" src="https://i.ibb.co/ZJnWg8W/logo.jpg" />
        </Link>
        <div className="hidden md:flex space-x-6 ">
          <ul className="list-style-type: none flex gap-8">
            <NavLink to="home" onClick={closeMobileMenu}>
              <li className="hover:text-black text-red transition border-b-2 border-red hover:border-black cursor-pointer ">
                Home
              </li>
            </NavLink>
            <NavLink to="AboutUs" onClick={closeMobileMenu}>
              <li className="hover:text-black text-red transition border-b-2 border-red hover:border-black cursor-pointer ">
                About Us
              </li>
            </NavLink>
            <NavLink to="Curriculum" onClick={closeMobileMenu}>
              <li className="hover:text-black text-red transition border-b-2 border-red hover:border-black cursor-pointer ">
                Curriculum
              </li>
            </NavLink>
            <NavLink to="WhyChooseUs" onClick={closeMobileMenu}>
              <li className="hover:text-black text-red transition border-b-2 border-red hover:border-black cursor-pointer ">
                Why Choose Us
              </li>
            </NavLink>
            <NavLink to="ContactUs" onClick={closeMobileMenu}>
              <li className="bg-red hover:text-black text-white font-bold py-1 px-2 rounded-full shadow-md transition duration-300 ease-in-out">
                Contact Us
              </li>
            </NavLink>
            {/* <NavLink to="Footer" onClick={closeMobileMenu}><li className='hover:text-black text-red transition border-b-2 border-red hover:border-black cursor-pointer '>Footer </li></NavLink> */}
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-red text-3xl" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {click && (
        <div className="bg-red py-4">
          <div className="container mx-auto">
            <ul className="flex flex-col items-center space-y-4">
              <MobileNavLink to="home" onClick={closeMobileMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink to="AboutUs" onClick={closeMobileMenu}>
                About Us
              </MobileNavLink>
              <MobileNavLink to="Curriculum" onClick={closeMobileMenu}>
                Curriculum
              </MobileNavLink>
              <MobileNavLink to="WhyChooseUs" onClick={closeMobileMenu}>
                Why Choose Us
              </MobileNavLink>
              <MobileNavLink to="ContactUs" onClick={closeMobileMenu}>
                Contact Us
              </MobileNavLink>
              {/* <MobileNavLink to="Footer" onClick={closeMobileMenu}>Footer</MobileNavLink> */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    spy={true}
    className="text-white hover:text-gray-200 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    spy={true}
    className="text-white hover:text-gray-200 cursor-pointer"
    onClick={onClick}
  >
    <li className="py-2">{children}</li>
  </Link>
);

export default Header;

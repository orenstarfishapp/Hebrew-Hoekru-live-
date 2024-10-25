import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./../assets/images/logo.png";

const Navbar = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative mx-auto p-6 bg-[#4B5563]">
      {/* Flex Container */}
      <div className="flex items-center justify-between mx-auto w-4/5">
        {/* Logo */}
        <div className="flex items-center ml-12 mr-24">
          <img src={Logo} alt="" className="h-12" />
          <span className="text-white text-[30px]">Hebrew Learning</span>
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 lg:flex">
          <Link to="/lessons" className="text-white hover:text-darkGrayishBlue">
            Lessons
          </Link>
          <Link to="#" className="text-white hover:text-darkGrayishBlue">
            Chatbot
          </Link>
          <Link to="#" className="text-white hover:text-darkGrayishBlue">
            Forum
          </Link>
          <Link to="#" className="text-white hover:text-darkGrayishBlue">
            Vocabulary
          </Link>
          {user?.username ? (
            <p style={{ color: "white", fontWeight: 900 }}>{user.username}</p>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-darkGrayishBlue"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-darkGrayishBlue"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger lg:hidden focus:outline-none"
              : "block hamburger lg:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link to="/lessons">Lessons</Link>
          <Link to="#">Chatbot</Link>
          <Link to="#">Forum</Link>
          <Link to="#">Vocabulary</Link>
          <Link to="#">Login</Link>
          <Link to="#">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

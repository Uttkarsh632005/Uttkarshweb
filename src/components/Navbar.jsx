import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Uttkarsh &nbsp;
            <span className="sm:block hidden">| Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#work">Work</a>
          </li>
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
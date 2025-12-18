import React, { useState } from 'react';
import logo from '../assets/crm_logo.svg';
import adwora from '../assets/adwora.png'
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Link bosilganda menyuni yopish uchun funksiya
  const closeMenu = () => setIsOpen(false);

  return (
    <section
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full bg-[#FCFCFC] z-50 border-b border-gray-100"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Har doim chapda */}
          <NavLink to="/" onClick={closeMenu}>
            <img className="h-30 pr-4" src={adwora} alt="logo" />
          </NavLink>

          {/* Desktop Navigation - Katta ekranlarda ko'rinadi */}
          <div className="hidden md:flex items-center">
            <NavLink
              className="text-lg mx-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              to="/price"
            >
              Narxlar
            </NavLink>
            <NavLink
              className="text-lg mx-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              to="#"
            >
              Qo'llab quvvatlash
            </NavLink>
            <NavLink
              className="text-lg mx-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              to="/contact"
            >
              Aloqa
            </NavLink>
          </div>

          {/* Desktop Right Section (Phone & Button) */}
          <div className="hidden md:flex items-center">
            <span className="text-base mr-4 hover:text-blue-600 flex items-center transition-colors">
              <i className="fa-solid fa-phone mr-2 text-sm"></i>50 005 68 21
            </span>
            <a
              className="text-white rounded-[6.5px] px-5 py-2 bg-gradient-to-r from-[#161527] to-[#2937b6] relative overflow-hidden transition-all hover:shadow-lg active:scale-95"
              href="#"
            >
              Demo olish
            </a>
          </div>

          {/* Hamburger Icon - Faqat mobil qurilmalarda ko'rinadi */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-800 focus:outline-none p-2"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Absolute orqali pastki qismlarga halaqit bermaydi */}
        <div
          className={`
          absolute top-16 left-0 w-full bg-white shadow-xl border-t border-gray-100
          flex flex-col p-6 space-y-4 md:hidden transition-all duration-300 ease-in-out
          ${
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-5'
          }
        `}
        >
          <NavLink
            to="/price"
            onClick={closeMenu}
            className="text-xl font-medium border-b pb-2"
          >
            Narxlar
          </NavLink>
          <NavLink
            to="/support"
            onClick={closeMenu}
            className="text-xl font-medium border-b pb-2"
          >
            Qo'llab quvvatlash
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="text-xl font-medium border-b pb-2"
          >
            Aloqa
          </NavLink>

          <div className="pt-4 flex flex-col space-y-4">
            <span className="text-lg flex items-center text-gray-700">
              <i className="fa-solid fa-phone mr-3 text-blue-600"></i>50 005 68
              21
            </span>
            <a
              className="text-center text-white rounded-lg py-3 bg-gradient-to-r from-[#161527] to-[#2937b6]"
              href="#"
              onClick={closeMenu}
            >
              Demo olish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

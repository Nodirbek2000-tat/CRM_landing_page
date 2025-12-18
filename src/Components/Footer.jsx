import React from 'react';
import crmLogo from '../assets/crm_logo.svg';
import appstore from '../assets/app_store_download.svg';
import google_play from '../assets/google_download.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <img className="h-10 mb-4" src={crmLogo} alt="crm_logo" />
            <p className="text-gray-400 text-xl leading-relaxed mt-6">
              O'quv markazlari <br /> uchun professional <br /> CRM tizimi
            </p>
          </div>

          {/* Biz haqimizda */}
          <div>
            <a className="text-white text-xl font-semibold mb-4 cursor-pointer  hover:text-orange-400 transition-colors">
              Biz haqimizda
            </a>
            <div className="flex flex-col gap-2 mt-10">
              <a href="#" className="inline-block">
                <img className="h-12" src={google_play} alt="Google Play" />
              </a>
              <a href="#" className="inline-block">
                <img className="h-12" src={appstore} alt="App Store" />
              </a>
            </div>
          </div>

          {/* Kontaktlar */}
          <div>
            <NavLink
              to={'/contact'}
              className="text-white font-semibold mb-4 text-xl cursor-pointer  hover:text-orange-400 transition-colors "
            >
              Kontaktlar
            </NavLink>
          </div>

          {/* Ijtimoiy Tarmoqlar va Yuklanish */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xl ">
              Ijtimoiy Tarmoqlar
            </h4>
            <div className="flex items-center gap-3 mb-6 mt-4">
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://t.me"
                className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm mb-2">
            Copyright © 2025{' '}
            <span className="text-white font-semibold">Adwora</span>
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            Xizmatlar, saytda taqdim etilgan, eksklyuziv ravishda yuridik
            shaxslar va alohida tadbirkorlar uchun mo'ljallangan va tadbirkorlik
            faoliyatida qo'llaniladi. Xizmat iste'molchilarga mo'ljallangan
            emas. O'zbekiston Respublikasining "Iste'molchilrning huquqlarini
            himoya qilish to'g'risida" Qonuni ushbu xizmatga tadbiq etilmaydi.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

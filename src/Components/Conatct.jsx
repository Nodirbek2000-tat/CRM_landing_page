import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-20 font-sans min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Card Container */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-16">
          {/* Back to Home Link */}
          <div className="mb-8">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all duration-300"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Bosh sahifaga qaytish</span>
            </NavLink>
          </div>

          {/* Title and Intro */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Kontaktlar
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Adwora CRM bilan bog'lanish uchun quyidagi kontaktlardan
              foydalaning. Biz doimo yordamga tayyormiz!
            </p>
          </div>

          {/* Contacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact 1 - Phone (Blue) */}
            <div className="group relative overflow-hidden rounded-2xl p-6 bg-slate-50 border-2 border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-500 flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500">
                <i className="fa-solid fa-phone text-xl text-blue-500"></i>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Nomer
                </span>
                <a
                  href="tel:+998787771100"
                  className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  +998(50) 005-68-21
                </a>
              </div>
            </div>

            {/* Contact 2 - Support (Orange) */}
            <div className="group relative overflow-hidden rounded-2xl p-6 bg-slate-50 border-2 border-transparent hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all duration-500 flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-500">
                <i className="fa-solid fa-comment-dots text-xl text-orange-500"></i>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Qo'llab-quvvatlash
                </span>
                <a
                  href="https://t.me/Nodirbek_shukurov1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors"
                >
                  t.me/adwora_support
                </a>
              </div>
            </div>

            {/* Contact 3 - Manager (Green) */}
            <div className="group relative overflow-hidden rounded-2xl p-6 bg-slate-50 border-2 border-transparent hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-500 flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-green-50 transition-all duration-500">
                <i className="fa-solid fa-user-tie text-xl text-green-500"></i>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Loyiha Menejeri
                </span>
                <a
                  href="https://t.me/Nodirbek_shukurov1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl font-bold text-gray-800 hover:text-green-600 transition-colors"
                >
                  t.me/adwora_manager
                </a>
              </div>
            </div>

            {/* Contact 4 - Sales (Purple) */}
            <div className="group relative overflow-hidden rounded-2xl p-6 bg-slate-50 border-2 border-transparent hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-500 flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-50 transition-all duration-500">
                <i className="fa-solid fa-cart-shopping text-xl text-purple-500"></i>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Sotuv bo'limi
                </span>
                <a
                  href="https://t.me/Nodirbek_shukurov1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
                >
                  t.me/adwora_sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

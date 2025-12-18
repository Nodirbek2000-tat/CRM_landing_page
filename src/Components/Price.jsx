import React from 'react';

function Price() {
  return (
    <section className="bg-[#FCFCFC] font-sans">
      <div className="mx-auto max-w-6xl py-20 md:py-40 px-4 md:px-6">
        {/* Pricing Table */}
        <div className="bg-[#FFFFFF] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden overflow-x-auto">
          {/* Table Header */}
          <div
            data-aos="zoom-in-up"
            className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-4 md:p-8 bg-[#F8F8F8] min-w-max md:min-w-full"
          >
            <div className="text-black font-bold text-sm md:text-lg">Tarif</div>
            <div className="text-center">
              <div className="font-bold text-base md:text-xl mb-0 md:mb-1">
                Start
              </div>
              <div className="text-xs md:text-sm text-[#A8A8AB]">0-100</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-black font-bold text-base md:text-xl mb-1">
                Basic
              </div>
              <div className="text-[#A8A8AB] text-sm">100-300</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-black font-bold text-base md:text-xl mb-1">
                Pro
              </div>
              <div className="text-[#A8A8AB] text-sm">300-1000</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-black font-bold text-base md:text-xl mb-1">
                Premium
              </div>
              <div className="text-[#A8A8AB] text-sm">1000+</div>
            </div>
          </div>

          {/* 3 oy */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-4 md:p-8 border-b border-blue-50 transition min-w-max md:min-w-full">
            <div className="font-semibold text-gray-800 text-sm md:text-lg">
              3 oy
            </div>
            <div className="text-center font-bold text-blue-900 text-base md:text-xl">
              1 500 000
            </div>
            <div className="text-center font-bold text-blue-900 text-base md:text-xl hidden md:block">
              3 120 000
            </div>
            <div className="text-center font-bold text-blue-900 text-base md:text-xl hidden md:block">
              4 680 000
            </div>
            <div className="text-center font-bold text-blue-900 text-base md:text-xl hidden md:block">
              9 000 000
            </div>
          </div>

          {/* 6 oy */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-4 md:p-8 border-b border-blue-50 transition min-w-max md:min-w-full">
            <div className="font-semibold text-gray-800 text-sm md:text-lg">
              6 oy
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-900 text-base md:text-xl">
                2 700 000
              </div>
              <span className="text-gray-400 line-through text-xs md:text-sm">
                3 000 000
              </span>
              <span className="text-orange-500 font-semibold ml-1 md:ml-2 text-xs md:text-base">
                %10
              </span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-blue-900 text-xl">5 616 000</div>
              <span className="text-gray-400 line-through text-sm">
                6 240 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-blue-900 text-xl">8 424 000</div>
              <span className="text-gray-400 line-through text-sm">
                9 360 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-blue-900 text-xl">16 200 000</div>
              <span className="text-gray-400 line-through text-sm">
                18 000 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
          </div>

          {/* 9 oy - Popular */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-4 md:p-8 border-b border-blue-200 bg-[#FFFAF4] transition min-w-max md:min-w-full">
            <div className="font-semibold text-gray-800 text-sm md:text-lg flex items-center gap-1 md:gap-2">
              9 oy <i className="fa-solid fa-bolt text-orange-500"></i>
            </div>
            <div className="text-center">
              <div className="font-bold text-orange-600 text-base md:text-xl flex items-center justify-center gap-1">
                4 050 000 <i className="fa-solid fa-trophy text-sm"></i>
              </div>
              <span className="text-gray-400 line-through text-xs md:text-sm">
                4 500 000
              </span>
              <span className="text-orange-500 font-semibold ml-1 md:ml-2 text-xs md:text-base">
                %10
              </span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-orange-600 text-xl flex items-center justify-center gap-1">
                8 424 000 <i className="fa-solid fa-trophy text-yellow-500"></i>
              </div>
              <span className="text-gray-400 line-through text-sm">
                9 360 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-orange-600 text-xl flex items-center justify-center gap-1">
                12 636 000{' '}
                <i className="fa-solid fa-trophy text-yellow-500"></i>
              </div>
              <span className="text-gray-400 line-through text-sm">
                14 040 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-orange-600 text-xl flex items-center justify-center gap-1">
                24 300 000{' '}
                <i className="fa-solid fa-trophy text-yellow-500"></i>
              </div>
              <span className="text-gray-400 line-through text-sm">
                27 000 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
          </div>

          {/* 12 oy */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-4 md:p-8 transition min-w-max md:min-w-full">
            <div className="font-semibold text-gray-800 text-sm md:text-lg">
              12 oy
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-900 text-base md:text-xl flex items-center justify-center gap-1">
                5 400 000{' '}
                <i className="fa-regular fa-star text-orange-500 text-xs md:text-base"></i>
              </div>
              <span className="text-gray-400 line-through text-xs md:text-sm">
                6 000 000
              </span>
              <span className="text-orange-500 font-semibold ml-1 md:ml-2 text-xs md:text-base">
                %10
              </span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-blue-900 text-xl flex items-center justify-center gap-1">
                11 232 000{' '}
                <i className="fa-regular fa-star text-orange-500"></i>
              </div>
              <span className="text-gray-400 line-through text-sm">
                12 480 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-blue-900 text-xl flex items-center justify-center gap-1">
                16 848 000{' '}
                <i className="fa-regular fa-star text-orange-500"></i>
              </div>
              <span className="text-gray-400 line-through text-sm">
                18 720 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
            <div className="text-center hidden md:block">
              <div className="font-bold text-blue-900 text-xl flex items-center justify-center gap-1">
                32 400 000{' '}
                <i className="fa-regular fa-star text-orange-500"></i>
              </div>
              <span className="text-gray-400 line-through text-sm">
                36 000 000
              </span>
              <span className="text-orange-500 font-semibold ml-2">%10</span>
            </div>
          </div>
        </div>

        {/* Platforma uchun to'lov Section */}
        <div className="mt-10 relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Platforma uchun to'lov
            </h3>
            <p className="text-blue-100 text-sm md:text-lg">
              Xavfsiz va qulay to'lov — bir necha bosqichda yakunlang
            </p>
          </div>
          <a
            href="https://t.me/Nodirbek_shukurov1"
            className="relative z-10 bg-white text-blue-700 font-bold py-4 px-10 rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            To'lov qilish
          </a>
        </div>

        {/* Bonus and Coming Soon Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="group flex items-center gap-3 bg-white border border-orange-100 px-6 py-4 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <i className="fa-solid fa-gift text-orange-500 text-xl"></i>
            <span className="text-gray-700 font-semibold">
              9 oylik tarifda{' '}
              <span className="text-orange-600">+1 oy bonus</span>
            </span>
          </div>

          <div className="group flex items-center gap-3 bg-white border border-blue-100 px-6 py-4 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <i className="fa-solid fa-certificate text-blue-500 text-xl"></i>
            <span className="text-gray-700 font-semibold">
              12 oylik tarifda{' '}
              <span className="text-blue-600">+2 oy bonus</span>
            </span>
          </div>

          {/* Coming Soon Section */}
          <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 px-6 py-4 rounded-2xl shadow-inner opacity-50 cursor-not-allowed">
            <i className="fa-solid fa-lock text-gray-500"></i>
            <div className="flex flex-col">
              <span className="text-gray-500 font-medium leading-none text-sm">
                Maxsus chegirma
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mt-1">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;

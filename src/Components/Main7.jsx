import React from 'react';

function Main7() {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-20 font-sans">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header Section - Chapda sarlavha, o'ngda tekst */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <p className="text-base md:text-lg text-gray-500 max-w-xs italic border-l-4 border-blue-600 pl-4">
            Adwora — bu Sizning ta'lim biznesingiz uchun eng yaxshi tanlov!
          </p>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Biz bilan nimalarga <br />
              <span className="text-blue-600">ega bo'lasiz?</span>
            </h2>
          </div>
        </div>

        {/* Features Grid - Kichikroq cardlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Feature 1 - Orange */}
          <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 border-2 border-orange-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:border-orange-400">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-5 shadow-sm group-hover:scale-110 transition-all duration-500">
              <i className="fa-solid fa-headset text-xl text-orange-600"></i>
            </div>
            <h3 className="relative text-xl font-bold text-gray-900 mb-3">
              Texnik yordam
            </h3>
            <p className="relative text-gray-600 leading-relaxed text-sm md:text-base">
              Siz uchun biriktirilgan maxsus menejerlar Siz muvaffaqiyatga
              erishishingizga o'z hissasini qo'shib va doimiy qo'llab-quvvatlash
              ko'rsatishadi.
            </p>
            <div className="relative w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-6 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Feature 2 - Blue */}
          <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:border-blue-400">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-5 shadow-sm group-hover:scale-110 transition-all duration-500">
              <i className="fa-solid fa-comments text-xl text-blue-600"></i>
            </div>
            <h3 className="relative text-xl font-bold text-gray-900 mb-3">
              Bepul Online Konsultatsiya
            </h3>
            <p className="relative text-gray-600 leading-relaxed text-sm md:text-base">
              O'quv markazingizni rivojlantirish uchun bepul konsultatsiya
              xizmatini taqdim etamiz. Bizning mutaxassislarimiz Sizga eng
              yaxshi yechimlarni taklif qilishadi.
            </p>
            <div className="relative w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-6 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Feature 3 - Green */}
          <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-green-50 via-green-50 to-green-100 border-2 border-green-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:border-green-400">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-5 shadow-sm group-hover:scale-110 transition-all duration-500">
              <i className="fa-solid fa-shield-halved text-xl text-green-600"></i>
            </div>
            <h3 className="relative text-xl font-bold text-gray-900 mb-3">
              Xavfsizlik
            </h3>
            <p className="relative text-gray-600 leading-relaxed text-sm md:text-base">
              Sizning ma'lumotlaringiz xavfsizligi biz tomondan 3 tomonlama
              himoyalanadi. Bizga Sizning ishonchingiz va ma'lumotlar butunligi
              juda muhim!
            </p>
            <div className="relative w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mt-6 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Feature 4 - Purple */}
          <div className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100 border-2 border-purple-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:border-purple-400">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-5 shadow-sm group-hover:scale-110 transition-all duration-500">
              <i className="fa-solid fa-users-gear text-xl text-purple-600"></i>
            </div>
            <h3 className="relative text-xl font-bold text-gray-900 mb-3">
              Qulay Interfeys
            </h3>
            <p className="relative text-gray-600 leading-relaxed text-sm md:text-base">
              Barcha foydalanuvchilar uchun qulay va ishlatishga oson interfeys
              orqali qisqa vaqt ichida platformani to'liq o'rganishingiz mumkin!
            </p>
            <div className="relative w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-6 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-12 md:mt-20 text-center">
          <a
            href="https://t.me/Nodirbek_shukurov1"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gray-900 hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Batafsil ma'lumot olish</span>
            <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main7;

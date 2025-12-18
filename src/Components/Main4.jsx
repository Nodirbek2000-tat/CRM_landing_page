import React from 'react';
import Counter from './Counter';

function Main4() {
  // Backend'dan keladigan ma'lumotlar
  const stats = {
    users: 1250,
    courses: 87,
    teachers: 24,
    graduates: 5400,
  };

  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-6xl py-16 md:py-30 px-6">
        {/* Sarlavha responsivligi */}
        <h2
          data-aos="zoom-in"
          className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left leading-tight"
        >
          Modme foydalanuvchilari <br className="md:hidden" /> raqamlarda
        </h2>

        {/* Grid: Mobil (1 ustun), Planshet (2 ustun), Desktop (4 ustun) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {/* Card 1 */}
          <div
            data-aos="zoom-in"
            className="py-10 text-center bg-gradient-to-r from-[#161527] to-[#2937b6] text-[#FFFFFF] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-4xl md:text-5xl font-bold">
              <Counter value={stats.users} />+
            </p>
            <p className="text-lg md:text-xl mt-4 opacity-90">
              O'quv markazlari
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="py-10 text-center bg-gradient-to-r from-[#161527] to-[#2937b6] text-[#FFFFFF] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-4xl md:text-5xl font-bold">
              <Counter value={stats.courses} />+
            </p>
            <p className="text-lg md:text-xl mt-4 opacity-90">Filiallar</p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="py-10 text-center bg-gradient-to-r from-[#161527] to-[#2937b6] text-[#FFFFFF] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-4xl md:text-5xl font-bold">
              <Counter value={stats.teachers} />+
            </p>
            <p className="text-lg md:text-xl mt-4 opacity-90">Guruhlar</p>
          </div>

          {/* Card 4 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="py-10 text-center bg-gradient-to-r from-[#161527] to-[#2937b6] text-[#FFFFFF] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-4xl md:text-5xl font-bold">
              <Counter value={stats.graduates} />+
            </p>
            <p className="text-lg md:text-xl mt-4 opacity-90">O'quvchilar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main4;

import React from 'react';
import rasm1 from '../assets/crm1.webp';
import rasm2 from '../assets/crm2.webp';
import rasm3 from '../assets/crms3.webp';

function Main1() {
  return (
    <section className="bg-[#FFFFFF]">
      <div data-aos="fade-up" className="mx-auto max-w-6xl py-25 md:py-25 px-6">
        {/* Sarlavha - Mobil uchun text o'lchami moslandi */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight md:leading-20">
          O‘quv markazingizni yangi <br className="hidden md:block" /> darajaga
          olib chiqing
        </h2>

        {/* Tavsif matni */}
        <p className="text-[#A8A8A8] text-lg md:text-xl mt-4 max-w-2xl">
          Modme — bu tizimli boshqaruv, avtomatlashtirish va raqamli yechim.
          Qo‘lda bajariladigan ishlarni qisqartiring, vaqtingizni tejang va
          boshqaruvni soddalashtiring.
        </p>

        {/* Tugmalar konteyneri */}
        <div className="mt-12 md:mt-24 flex flex-col md:flex-row items-center gap-4">
          {/* Asosiy tugma */}
          <a
            className="w-full md:w-auto text-center text-lg md:text-xl font-semibold py-5 px-6 rounded-xl text-[#FFFFFF] bg-gradient-to-r from-[#2937b6] to-[#1e1a60] relative overflow-hidden transition-transform active:scale-95 shadow-lg hover:shadow-blue-200"
            href="#"
          >
            Hoziroq sinab ko'ring - 7 kun bepul
          </a>

          {/* Telefon tugmasi */}
          <a
            className="w-full md:w-auto text-center text-[17px] font-bold py-5 px-8 text-[#1e1a60] border-2 border-[#1e1a60] rounded-xl hover:bg-[#f4f4f8] transition-all active:scale-95"
            href="tel:+998500056821"
          >
            <i className="fa-solid fa-phone mr-2"></i>Sotuv bo'limi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main1;

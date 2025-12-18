import React from 'react';
import rasm1 from '../assets/crm_tzimlashtirish.webp';
import rasm2 from '../assets/crm_lidlar.webp';
import rasm3 from '../assets/crm_integratsiya.webp';
import rasm4 from '../assets/crm_moliya.webp';
import Tilt from 'react-parallax-tilt';

function Main5() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-6xl py-40">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold">
            Muammolarni <br /> unuting!
          </h2>
          <p className="text-[#ADADAD] text-xl ">
            Dars jadvalidan moliyagacha bo'lgan barcha jarayonlarni <br />
            to'liq tizimlashtiring, qo'lda qilinadigan ishlarni <br />
            avtomatlashtiring va nazoratni o'z qo'lingizga oling
          </p>
        </div>
        <div className="flex gap-8 mt-20">
          <Tilt
            tiltReverse={true}
            tiltMaxAngleX={3} // x o'qi boylab chiqishi
            tiltMaxAngleY={3} // y o'qi boylab chiqishi
            perspective={800}
            transitionSpeed={2000}
          >
            <div data-aos="zoom-in-up" className="px-10 py-10 rounded-3xl shadow-2xl">
              <p className="px-4 py-2 text-[17px] text-[#894B00] font-semibold bg-amber-100 rounded-xl inline-block">
                Tizimlashtirish
              </p>
              <h3 className="text-[26px] font-bold my-6">
                Barcha jarayonlarni tartibga <br /> soling
              </h3>
              <p className=" text-[#5F6976] my-8">
                Jarayonlarni yagona tizimda oson boshqarishing, <br /> o'lchang
                va tartibga soling, bu uchun <br /> esa Modmeda barcha
                funksiyalar mavjud
              </p>
              <img className="h-70 w-250 rounded-xl" src={rasm1} alt="rasm1" />
            </div>
          </Tilt>
          <Tilt
            tiltReverse={true}
            tiltMaxAngleX={3} // x o'qi boylab chiqishi
            tiltMaxAngleY={3} // y o'qi boylab chiqishi
            perspective={800}
            transitionSpeed={2000}
          >
            <div data-aos="zoom-in-up" className="px-10 py-10 rounded-3xl shadow-2xl">
              <p className="px-4 py-2 text-[17px] text-[#CB1042] font-semibold bg-[#FFF2F2] rounded-xl inline-block">
                Lidlar
              </p>
              <h3 className="text-[26px] font-bold my-6">
                O'quvchi sonini bir necha barobar oshiring
              </h3>
              <p className="text-[16px] text-[#5F6976] my-8">
                Qulay interfeys orqali har bir mijoz bilan aloqani samarali
                boshqarish, ularni sinov darsiga yo'naltirish, guruhlarga
                qo'shish va birinchi to'lovga olib kelish jarayonlarini to'liq
                nazorat qiling
              </p>
              <img className="h-80 w-160 rounded-xl" src={rasm2} alt="rasm1" />
            </div>
          </Tilt>
        </div>
        <div className="flex gap-8 mt-8">
          <Tilt
            tiltReverse={true}
            tiltMaxAngleX={3} // x o'qi boylab chiqishi
            tiltMaxAngleY={3} // y o'qi boylab chiqishi
            perspective={800}
            transitionSpeed={2000}
          >
            <div data-aos="zoom-in-up" className="px-10 py-10 rounded-3xl shadow-2xl">
              <p className="px-4 py-2 text-[17px] text-[#0E6E39] font-semibold bg-[#e3f5e9] rounded-xl inline-block">
                Moliya
              </p>
              <h3 className="text-[26px] font-bold my-6">
                Moliyani oson boshqaring
              </h3>
              <p className="text-[16px] text-[#5F6976] my-8">
                Barcha to’lovlar va xarajatlarni bir joyda yuritish, sof foydani
                avtomatik aniqlash, oyliklarni hisoblash, qarzdorlarni oson
                boshqarish orqali o’quv markazingizni keyingi darajaga olib
                chiqing!
              </p>
              <img className="h-80 w-160 rounded-xl" src={rasm4} alt="rasm1" />
            </div>
          </Tilt>

          <Tilt
            tiltReverse={true}
            tiltMaxAngleX={3} // x o'qi boylab chiqishi
            tiltMaxAngleY={3} // y o'qi boylab chiqishi
            perspective={800}
            transitionSpeed={2000}
          >
            <div data-aos="zoom-in-up" className="px-10 py-10 rounded-3xl shadow-2xl">
              <p className="px-4 py-2 text-[17px] text-[#894B00] font-semibold bg-amber-100 rounded-xl inline-block">
                Integratsiyalar
              </p>
              <h3 className="text-[26px] font-bold my-6">
                Zamonaviy texnologiyalar bilan yanada qulayroq
              </h3>
              <p className=" text-[#5F6976] my-8">
                Modme orqali turli foydali xizmatlar va tizimlar bilan
                bog'lanib, ish jarayonlarini avtomatlashtiring va samaradorlikni
                oshiring
              </p>
              <img className="h-70 w-230 rounded-xl" src={rasm3} alt="rasm1" />
            </div>
          </Tilt>
        </div>
        <div className="flex gap-8 mt-8">
          <Tilt
            tiltReverse={true}
            tiltMaxAngleX={3} // x o'qi boylab chiqishi
            tiltMaxAngleY={3} // y o'qi boylab chiqishi
            perspective={800}
            transitionSpeed={2000}
          >
            <div data-aos="zoom-in-up" className="px-10 py-10 rounded-3xl shadow-2xl">
              <p className="px-4 py-2 text-[17px] text-[#1B3EB9] font-semibold bg-[#F0F6FF] rounded-xl inline-block">
                Masofaviy boshqaruv
              </p>
              <h3 className="text-[26px] font-bold my-6">
                Ta’lim biznesingizni istalgan <br /> joydan boshqaring
              </h3>
              <p className="text-[18px] text-[#5F6976] my-8">
                Platforma yordamida ta’lim biznesingizdagi ko’rsatkichlarni
                masofadan turib boshqaring, bu Sizga ko’proq vaqtingiz
                biznesingizni yanada rivojlantirishga yo’naltirishingizga yana
                bir imkoniyat!
              </p>
            </div>
          </Tilt>
          <Tilt
            tiltReverse={true}
            tiltMaxAngleX={3} // x o'qi boylab chiqishi
            tiltMaxAngleY={3} // y o'qi boylab chiqishi
            perspective={800}
            transitionSpeed={2000}
          >
            <div data-aos="zoom-in-up" className="px-10 py-10 rounded-3xl shadow-2xl ">
              <p className="px-4 py-2 text-[17px] text-[#CB1042] font-semibold bg-[#FFF2F2] rounded-xl inline-block">
                Mobil Ilova va telegram bot
              </p>
              <h3 className="text-[26px] font-bold my-6">
                O'quvchi sonini bir necha barobar oshiring
              </h3>
              <p className="text-[18px] text-[#5F6976] my-8">
                Qulay interfeys orqali har bir mijoz bilan aloqani samarali
                boshqarish, ularni sinov darsiga yo'naltirish, guruhlarga
                qo'shish va birinchi to'lovga olib kelish jarayonlarini to'liq
                nazorat qiling
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Main5;

import React, { useState } from 'react';

function Main8() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Modme nima va kimlar uchun mo‘ljallangan?',
      a: "Adwora — bu o'quv markazlari faoliyatini avtomatlashtirish uchun maxsus ishlab chiqilgan CRM tizimidir.",
    },
    {
      q: 'Moliyaviy hisobotlar qanchalik to‘liq?',
      a: 'To‘liq avtomatik: har bir to‘lov, chegirma, qarzdorlik, oylik hisobotlar va tranzaksiyalar tizimda aks etadi.',
    },
    {
      q: 'Dastur bulutli xizmatmi yoki kompyuterga o‘rnatish kerakmi?',
      a: "Dastur to'liq bulutli tizimda ishlaydi, hech qanday o'rnatish shart emas, brauzer orqali istalgan joydan kirish mumkin.",
    },
    {
      q: 'Sinov muddati bormi?',
      a: "Ha, tizimning barcha imkoniyatlarini ko'rib chiqishingiz uchun 7 kunlik bepul demo davri beriladi.",
    },
    {
      q: 'Qanday to‘lov qilsa bo‘ladi?',
      a: "To'lovlarni bank o'tkazmasi, Payme, Click yoki korporativ kartalar orqali amalga oshirish imkoniyati mavjud.",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* ---  FAQ QISMI --- */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
            Ko'p beriladigan savollar
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${
                      openIndex === index ? 'text-orange-500' : 'text-gray-800'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                      openIndex === index
                        ? 'rotate-180 text-orange-500'
                        : 'text-gray-400'
                    }`}
                  ></i>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-40 pb-6 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#8A8A8A] leading-relaxed border-t pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main8;

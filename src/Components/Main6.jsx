import React, { useState,useEffect } from 'react';

import AOS from 'aos';
function Main6() {
  const tabsData = [
    {
      id: 'oylik',
      label: 'Oylik (Kalendar)',
      title: 'Oylik (Kalendar)',
      icon: 'O',
      description:
        'Guruhga qo’shilgan o’quvchini faollashtirilgan sanasidan boshlab oyni ohirigacha, nechta dars bo’lishidan qat’iy nazar, platformani o’zi kurs narxi ( yoki chegirmali narx) dan kelib chiqgan holda avtomatik hisoblab beradi. O’quvchilarning keyingi to’lovi esa har oyning 1-chi sanasida bo’ladi',
      example:
        'O’quvchi oyni qaysi sanasidan kelishidan qat’iy nazar, u oyni ohirigacha qolgan darslar uchun to’lov qiladi',
      advantages: [
        'O’quvchilarni qarzdorliklarini aniqlash va nazorat qilish',
        'To’lovlar har oyni boshida tushgani sababli moliyani nazorat qilish va xarajatlarni oldindan hisoblash',
        'Ustozlar uchun oylik maoshni har oyni boshida kechiktirmasdan bera olish',
      ],
      disadvantages: ['Boshqa to’lov rejimlariga mos kelmasligi'],
    },
    {
      id: 'kunlik',
      label: 'Kunlik',
      title: "Kunlik To'lov Rejimi",
      icon: 'K',
      description:
        'Guruhga qo’shilgan o’quvchini faollashtirilgan sanasidan boshlab, har bir dars uchun, platformani o’zi kurs narxi ( yoki chegirmali narx) dan kelib chiqgan holda avtomatik hisoblab beradi. O’quvchilar to’lovni har dars amalga oshiradi',
      example:
        'O’quvchi oyni qaysi sanasidan kelishidan qat’iy nazar, u oyni ohirigacha qolgan har bir dars uchun dars kuni to’lov qiladi',
      advantages: [
        "O'quvchilar balansidan 1 oyga emas, har dars pul yechib oladi",
        "O'quvchi guruhdan guruhga o'tish jarayonida ham hech qanday eski guruhi uchun pul qaytarish holatlari bo'lmaydi",
        "Muzlatilgan o'quvchilardan pul yechilmaydi",
      ],
      disadvantages: [
        'Barcha to’lovlar bir kunda tushmasligi, ya’ni to’lovlar har dars kuni amalga oshirilganligi sababli, barcha to’lovlar ham bir oy davomida oz-ozdan tushadi',
      ],
    },
    {
      id: 'modul',
      label: 'Modul',
      title: "Modul To'lov Rejimi",
      icon: 'M',
      description:
        "Ushbu rejimda har nechta darsda o'quvchilardan pul yechilishi kerakligini tanlashingiz mumkin",
      example:
        'Har 12ta darsga pul yechib olsin desangiz guruh ochilgan sanadan boshlab har 12ta dars uchun pul yechib olishni boshlaydi. O’quvchi 4-darsda faollashtiriladigan bo’lsa modulni ohirigacha qolgan 8ta dars uchun to’lovni amalga oshiradi. Platforma o’quvchi faollashtirilgan sanadan kelib chiqib modulni ohirigacha nechta dars bo’lsa avtomatik qilinishi kerak bo’lgan to’lov hisoblab beradi',
      advantages: [
        "1 oyda 12 yoki 13ta dars bo'lib qoladigan holatlar, ushbu rejimdagi guruhlarga hech qanday ta'sir qilmaydi",
        'O’zingizga mos qilib modullar ( abonementlar) yarata olasiz',
      ],
      disadvantages: [
        'Barcha to’lovlar bir kunda tushmasligi, ya’ni ba’zi-bir guruhlarni modulini oyni o’rtasiga to’g’ri kelib qolishi',
      ],
    },
    {
      id: 'guruh',
      label: 'Guruh Boshlanish',
      title: 'Guruh Boshlanish Sanasi',
      icon: 'G',
      description:
        'Ushbu rejimda guruhdagi o’quvchilardan pul yechib olish sanasi guruh boshlanish sanasi deb hisoblanadi',
      example:
        "Guruh 14-sanada ochilsa, har oyning 14-sanasi o’quvchilar uchun to'lov kuni hisoblanadi. Bu rejimda ham 1 oyga o'quvchilardan kurs narxi (yoki chegirmali narx) bo'yicha to'lov olinadi",
      advantages: [
        "Agarda yangi guruhlar yetarlicha o'quvchi yig'ilishi bilan ochiladigan holatlarda, o'quvchilardan guruh boshlangan sanadan boshlab pul yechilishi natijasida, oyning qaysi qismi bo'lishidan qat'iy nazar to'liq to'lov olish",
        "O’quvchining to'lov sanasi doim bir xil (guruh boshlangan sana) va o'zgarmaydi",
      ],
      disadvantages: [
        'Barcha to’lovlar bir kunda tushmasligi, ya’ni ba’zi-bir guruhlarni boshlanish sanasi oyni har xil sanasiga to’g’ri kelib qolishi',
      ],
    },
    {
      id: 'kurs',
      label: "Kurs Uchun To'lov",
      title: "Butun Kurs Uchun To'lov",
      icon: 'K',
      description:
        "Bu rejimda o’quvchi butun kurs davomiyligi uchun bir martalik to'lovni amalga oshiradi",
      example:
        "6 oylik kurs uchun umumiy to'lov 6 000 000 so'm 6 oy uchun, birinchi faollashtirilgan vaqtdayoq jami 6 000 000 so'm qarzdorlikka platforma avtomatik kiritadi",
      advantages: [
        "Online kurs yurutuvchilar yoki to'lov butun kurs uchun oldindan olinadigan ta’lim biznezlari uchun",
      ],
      disadvantages: ['Boshqa to’lov rejimlariga mos kelmasligi'],
    },
    {
      id: 'individual',
      label: 'Individual',
      title: "Individual To'lov Rejimi",
      icon: 'I',
      description:
        "Bu rejimda o’quvchi qachon guruhda faollashtirilsa, har oyni o'sha sanasida platforma avtomatik pul yechib oladi",
      example:
        "O’quvchi 15-sanada faollashtirilgan bo'lsa, har oyning 15-sanasi to'lov kuni hisoblanadi",
      advantages: [
        'IO’quvchi kelgan sanadan boshlab har oy aynan o’sha sanada to’lov qilish imkoniyatini yaratib beradi',
      ],
      disadvantages: [
        'Barcha to’lovlar bir kunda tushmasligi, ya’ni ba’zi-bir o’quvchilar to’lovi oyni har xil sanasiga to’g’ri kelib qolishi',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeData = tabsData[activeTab];
  useEffect(()=>{
    AOS.refresh();
  },[activeTab])

  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Moslashuvchan va ishonchli hisob-kitob
          </h2>
          <p className="text-xl text-[#A8A8AB] leading-relaxed">
            6 xil to'lov rejimi orasidan o'zingizga eng qulayini tanlang. Har
            bir tranzaksiya shaffof, xavfsiz va minimal xatolik bilan amalga
            oshiriladi
          </p>
        </div>

        {/* Tabs Button */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 text-base ${
                activeTab === index
                  ? 'bg-black text-white shadow-lg'
                  : 'border-2 border-black text-black hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div
          data-aos="zoom-in-up"
          className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 flex flex-col max-w-3xl mx-auto w-full"
        >
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
              {activeData.icon}
            </div>
            <h2 className="text-2xl font-bold text-black">
              {activeData.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-800 mb-5 leading-relaxed text-base">
            {activeData.description}
          </p>

          {/* Divider */}
          <div className="border-t-2 border-gray-300 my-5"></div>

          {/* Misol */}
          <div className="mb-5 bg-white rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                i
              </div>
              <h3 className="font-bold text-xl text-base">Misol:</h3>
            </div>
            <p className="text-gray-800 ml-10 leading-relaxed text-base">
              {activeData.example}
            </p>
          </div>

          {/* Advantages and Disadvantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Advantages */}
            <div className="bg-white rounded-lg p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-green-600">+</span>
                <h4 className="font-bold text-xl text-green-600">
                  Afzalliklari
                </h4>
              </div>
              <ul className="space-y-2">
                {activeData.advantages.map((adv, idx) => (
                  <li
                    key={idx}
                    className="text-gray-800 text-[17px] flex items-start leading-relaxed"
                  >
                    <span className="text-green-600 mr-2 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-white rounded-lg p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-orange-500">−</span>
                <h4 className="font-bold text-xl text-orange-500">
                  Kamchiliklari
                </h4>
              </div>
              <ul className="space-y-2">
                {activeData.disadvantages.map((dis, idx) => (
                  <li
                    key={idx}
                    className="text-gray-800 text-[17px] flex items-start leading-relaxed"
                  >
                    <span className="text-orange-500 mr-2 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main6;

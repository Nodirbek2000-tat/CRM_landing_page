import React from 'react';
import logo1 from '../assets/adwora.png';
import logo2 from '../assets/adwora.png';
import logo3 from '../assets/adwora.png';
import logo4 from '../assets/adwora.png';
import logo5 from '../assets/adwora.png';
import logo6 from '../assets/adwora.png';
import logo7 from '../assets/adwora.png';
import logo8 from '../assets/adwora.png';

function Main3() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <section className="bg-[#FFFFFF] py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl  font-bold text-center">
          O’quv markazlarining ishonchli hamkori
        </h2>
        <p className="text-xl text-center mt-4 text-[#B0A8A8]">
          Ta’lim markazlari bilan yillar davomida birga o’smoqdamiz
        </p>

        {/* Tepki qator */}
        <div className="mt-16 relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-40 object-contain mr-20"
              />
            ))}
          </div>
        </div>

        {/* Pastki qator */}
        <div className=" relative overflow-hidden">
          <div className="flex w-max animate-scroll2">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo2-${index}`}
                className="h-40 object-contain mr-20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animatsiyalari */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 32s linear infinite;
        }
        .animate-scroll2 {
          animation: scroll2 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Main3;

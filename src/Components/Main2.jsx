import React from 'react';
import rasm1 from '../assets/crm1.webp';
import rasm2 from '../assets/crm2.webp';
import rasm3 from '../assets/crms3.webp';
import Tilt from 'react-parallax-tilt';

function Main2() {
  return (
    <section className="bg-[#FFFFFF] ">
      <div data-aos="zoom-in" className="mx-auto relative ">
        <Tilt
          tiltReverse={true}
          tiltMaxAngleX={2} // x o'qi boylab chiqishi
          tiltMaxAngleY={2} // y o'qi boylab chiqishi
          perspective={800}
          transitionSpeed={400}
        >
          <img className="h-225" src={rasm1} alt="" />
          <img
            data-aos="zoom-in"
            className="absolute h-120 -my-140 mx-90"
            src={rasm2}
            alt=""
          />
          <img
            data-aos="zoom-in"
            className="absolute h-120 -my-127 mx-230"
            src={rasm3}
            alt=""
          />
        </Tilt>
      </div>
    </section>
  );
}

export default Main2;

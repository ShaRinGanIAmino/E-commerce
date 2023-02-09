import React from 'react';
import styles from '../style';
import { hero } from '../assets';
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6 gap-8`}>
        <p className=" font-poppins sm:text-[60px] text-[30px] font-normal tracking-wide text-typo w-[90%]">
          Welcome to <span className="text-rose">ETUDES</span> where you can
          find the best shoes
        </p>
        <button className="border-solid border-2 border-typo pl-4 pr-4 pt-2 pb-2 bg-white hover:bg-rose transition">
          <a
            href={'#collection'}
            className="font-mont tracking-widest font-medium text-typo">
            COLLECTION
          </a>
        </button>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={hero}
          alt="Nike"
          className="w-[1600px] h-[500px] object-contain relative radius-[20px]"
        />
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className="flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10 mb-10 gap-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-typo">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-typo2 hover:text-rose cursor-pointer ${
                    index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-typo2 hover:text-rose cursor-pointer mb-4">
            ETUDES
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-typo2 hover:text-rose cursor-pointer mb-4">
            14 RUE EDENBOILEVARD
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-typo2 hover:text-rose cursor-pointer mb-4">
            75003 PARIS
          </p>
          <button className=" bg-white ">
            <a href={'#home'}>
              <img
                src={logo}
                alt="ETUDES"
                className="w-[94px] h-[32px] object-contain"
              />
            </a>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-typo2">
        <p className="font-poppins font-normal text-center md:text-[18px] text-[12px] leading-[27px] text-typo">
          Copyright Ⓒ 2022 ETUDES. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;

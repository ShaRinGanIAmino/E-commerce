import React from 'react';

const Card = ({ title, value, type, logo }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <img src={logo} alt="Nike" className="w-[300px] h-[300px]" />
      </div>
      <div className="flex space-x-0 gap-[160px] font-poppins text-typo">
        <p className="sm:text-[16px] text-[14px]">{title}</p>
        <p className="sm:text-[16px] text-[14px]">{value}</p>
      </div>
      <div className="text-typo2 font-poppins sm:text-[16px] text-[14px]">
        {type}
      </div>
    </div>
  );
};

export default Card;

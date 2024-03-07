import React, { useState } from 'react';

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div onClick={handleClick} className='cursor-pointer h-5 w-8'>
      <div className='relative'>
        <div className={`h-4 w-10 border ${toggle ? 'border-black' : 'border-red-500'} rounded-lg`}></div>
        <div className={`mt-[2px] ml-[3px] h-3 w-3 bg-black rounded-full absolute top-0 left-0 transition-transform ${toggle ? 'left-6' : ''}`}></div>
      </div>
    </div>
  );
}
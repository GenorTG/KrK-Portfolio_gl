import { useState } from 'react';
import {  } from 'react-icons/md';
import { TbLayoutBottombarExpandFilled, TbLayoutNavbarExpandFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { Redirects } from '../../data/data.ts';

const headerCLasses = 'z-50 bg-gray-100 absolute h-auto left-0 right-0 flex transition-all ease-in-out delay-50 rounded-b-2xl flex-col';
const headerHiddenClasses = `${headerCLasses} -translate-y-3/4`;
const headerShownClasses = `${headerCLasses} translate-y-0`;

const Header = () => {

  const [headerVisible, setHeaderVisible] = useState(false);



  return (
    <div className={headerVisible ? headerShownClasses : headerHiddenClasses}>
      <div className='flex justify-start items-center w-full h-full text-mainBlue font-bold flex-col'>
        {Redirects.map((project, index) => (
          <div key={index} className='w-full'>
            <Link 
              to={project.page}
            >
              <button 
                type="button"
                onClick={() => setHeaderVisible(false)}
                className='outline-none w-full border-b-2 border-mainOrange py-2 hover:text-white hover:bg-mainBlue transition-all ease-in-out'
              >{project.name}</button>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-end w-full'>
        {headerVisible
          ? <TbLayoutBottombarExpandFilled size={50} className='cursor-pointer text-mainBlue hover:text-mainLight transition-all ease-in-out' onClick={() => setHeaderVisible(false)}/>
          : <TbLayoutNavbarExpandFilled size={50} className='cursor-pointer text-mainBlue hover:text-mainLight transition-all ease-in-out' onClick={() => setHeaderVisible(true)}/> }
      </div>
    </div>
  );
};
export default Header;
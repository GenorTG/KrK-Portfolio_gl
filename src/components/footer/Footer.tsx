import { GiBarefoot } from 'react-icons/gi';
import fav64 from '/fav64.png';

const Footer = () => {
  return (
    <div className="absolute bottom-0 h-40 flex-col bg-gray-700 w-full flex justify-center items-center rounded-t-2xl text-white md:h-20 md:flex-row p-4 text-center">
      <p>{'This is a footer. Have a foot.'}</p>
      <GiBarefoot className='m-2 hover:text-mainOrange size-14 hover:size-16 transition-all ease-in-out delay-75 hover:m-1'/> 
      <p>{'Have a link to my Linked-in as well:'}</p>
      <a href='https://www.linkedin.com/in/krzysztofkutniowski/' target='_blank' rel="noreferrer">
        <img src={fav64} alt="kk" className='size-8 m-2 hover:size-12 ease-in-out transition-all cursor-pointer hover:m-0'/>
      </a>
    </div>
  );
};
export default Footer;
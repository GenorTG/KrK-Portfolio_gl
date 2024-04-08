import { GiBarefoot } from 'react-icons/gi';
import fav64 from '/fav64.png';

const Footer = () => {
  return (
    <div className="h-fit flex-col bg-gray-700 w-full flex justify-center items-center rounded-t-2xl text-white md:flex-row p-4 text-center">
      <p>{'This is a footer. Have a foot.'}</p>
      <GiBarefoot className='hover:text-mainOrange m-2 size-10 transition-all ease-in-out delay-75'/> 
      <p>{'Have a link to my Linked-in as well:'}</p>
      <a href='https://www.linkedin.com/in/krzysztofkutniowski/' target='_blank' rel="noreferrer">
        <img src={fav64} alt="kk" className='ease-in-out transition-all cursor-pointer size-10 ml-1 hover:size-12'/>
      </a>
    </div>
  );
};
export default Footer;
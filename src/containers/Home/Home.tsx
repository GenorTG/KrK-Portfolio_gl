import { Outlet, useLocation  } from 'react-router-dom';

import Card from '../../components/card/Card';
import { homeDetails } from '../../data/data';



const Home = () => {

  const { pathname } = useLocation();

  return (
    <div className='text-white pt-[40px] h-full font-mono'>
      <div className='flex justify-center items-center w-full h-full'>
        {pathname === '/'
          ? (
            <Card 
              img={homeDetails.image} 
              head={homeDetails.header} 
              subhead={homeDetails.subhead} 
              texts={homeDetails.texts} 
              links={homeDetails.links} 
            />
          ) : (
            <Outlet />
          )}
       
      </div>
    </div>
  );
};
export default Home;
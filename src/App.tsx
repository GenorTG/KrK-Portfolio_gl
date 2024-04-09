import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './containers/Home/Home';
import Footer from './components/footer/Footer';
import Gpt3 from './containers/gpt3/Gpt3';
import PetPins from './containers/PetPins/PetPins';

const App = () => {

  // const navigate = useNavigate();

  return (
    <div className='bg-gradient h-full min-h-svh'>
      <Header />
      <div className='h-full min-h-svh flex flex-col justify-between'>
        <div className='h-full my-40'>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/project/gpt3" element={<Gpt3 />} />
              <Route path="/project/petpins" element={<PetPins />} />
            </Route>
          </Routes>
        </div>
        <div className='relative bottom-0'>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
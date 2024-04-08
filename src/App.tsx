import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './containers/Home/Home';
import Footer from './components/footer/Footer';
import Gpt3 from './containers/gpt3/Gpt3';
import PetPins from './containers/PetPins/PetPins';

const App = () => {

  // const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/project/gpt3" element={<Gpt3 />} />
          <Route path="/project/petpins" element={<PetPins />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
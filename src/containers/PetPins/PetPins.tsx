import Card from '../../components/card/Card';
import { PetPinsDetails } from '../../data/data';

const PetPins = () => {
  return (
    <Card 
      img={PetPinsDetails.image} 
      head={PetPinsDetails.header} 
      subhead={PetPinsDetails.subhead} 
      texts={PetPinsDetails.texts} 
      links={PetPinsDetails.links} 
    />
  );
};
export default PetPins;
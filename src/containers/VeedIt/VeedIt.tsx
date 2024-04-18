import Card from '../../components/card/Card';
import { veedItDetails } from '../../data/data';

const VeedIt = () => {
  return (
    <Card 
      img={veedItDetails.image} 
      head={veedItDetails.header} 
      subhead={veedItDetails.subhead} 
      texts={veedItDetails.texts} 
      links={veedItDetails.links} 
    />
  );
};
export default VeedIt;
import Card from '../../components/card/Card';
import { gpt3Details } from '../../data/data';

const Gpt3 = () => {
  return (
    <div>
      <Card 
        img={gpt3Details.image} 
        head={gpt3Details.header} 
        subhead={gpt3Details.subhead} 
        texts={gpt3Details.texts} 
        links={gpt3Details.links} 
      />
    </div>
  );
};
export default Gpt3;
import InfoCard from "@/components/InfoCard";

import { PetPinsDetails } from "@/constants/data";

const PetPins = () => {
  return (
    <InfoCard
      image={PetPinsDetails.image}
      header={PetPinsDetails.header}
      subheader={PetPinsDetails.subhead}
      info={PetPinsDetails.info}
      links={PetPinsDetails.links}
      techstack={PetPinsDetails.techstack}
    />
  );
};
export default PetPins;

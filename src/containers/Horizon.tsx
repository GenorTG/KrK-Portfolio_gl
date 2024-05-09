import InfoCard from "@/components/InfoCard";

import { horizonDetails } from "@/constants/data";

const Horizon = () => {
  return (
    <InfoCard
      image={horizonDetails.image}
      header={horizonDetails.header}
      subheader={horizonDetails.subhead}
      info={horizonDetails.info}
      links={horizonDetails.links}
      techstack={horizonDetails.techstack}
    />
  );
};
export default Horizon;

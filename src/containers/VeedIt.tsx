import InfoCard from "@/components/InfoCard";

import { veedItDetails } from "@/constants/data";

const VeedIt = () => {
  return (
    <InfoCard
      image={veedItDetails.image}
      header={veedItDetails.header}
      subheader={veedItDetails.subhead}
      info={veedItDetails.info}
      links={veedItDetails.links}
      techstack={veedItDetails.techstack}
    />
  );
};
export default VeedIt;

import InfoCard from "@/components/InfoCard";

import { gpt3Details } from "@/constants/data";

const Gpt3 = () => {
  return (
    <InfoCard
      image={gpt3Details.image}
      header={gpt3Details.header}
      subheader={gpt3Details.subhead}
      info={gpt3Details.info}
      links={gpt3Details.links}
      techstack={gpt3Details.techstack}
    />
  );
};
export default Gpt3;

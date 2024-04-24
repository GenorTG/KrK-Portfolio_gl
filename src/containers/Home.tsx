import { Ripple, initTWE } from "tw-elements";
initTWE({ Ripple }, { allowReinits: true });
import PortfolioList from "./PortfolioList";
import Welcome from "./Welcome";
import { useRef } from "react";

const Home = () => {
  const entries = useRef(null);

  return (
    <div className="flex-center background-animate h-full min-h-svh w-full flex-col gap-4 scroll-smooth bg-gradient-to-r from-foreground to-[#0F0608]">
      <Welcome scrollTo={entries} />
      <div ref={entries} className="w-full">
        <PortfolioList />
      </div>
    </div>
  );
};
export default Home;

import { Ripple, initTWE } from "tw-elements";
initTWE({ Ripple }, { allowReinits: true });
import PortfolioList from "./PortfolioList";
import Welcome from "./Welcome";
import { useRef } from "react";

const Home = () => {
  const entries = useRef(null);

  return (
    <div className="flex-center h-full min-h-svh flex-col gap-4 scroll-smooth bg-foreground">
      <Welcome scrollTo={entries} />
      <div ref={entries} className="w-full">
        <PortfolioList />
      </div>
    </div>
  );
};
export default Home;

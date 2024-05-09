import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Gpt3 from "./Gpt3";
import PetPins from "./PetPins";
import VeedIt from "./VeedIt";
import { ReactNode, useRef } from "react";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { cn } from "@/lib/utils";
import { Ripple, initTWE } from "tw-elements";
import Horizon from "./Horizon";
initTWE({ Ripple }, { allowReinits: true });

type Entry = {
  title: string;
  node: ReactNode;
};

type Entries = Entry[];

const Entries: Entries = [
  {
    title: "Blog frontpage",
    node: <Gpt3 />,
  },
  {
    title: "PetPins - A pinterest-like SM site",
    node: <PetPins />,
  },
  {
    title: "VeedIt - A video conferencing app",
    node: <VeedIt />,
  },
  {
    title: "Horizon - A banking and finance app",
    node: <Horizon />,
  },
];

const PortfolioList = () => {
  const ref = useRef() as React.RefObject<HTMLElement>;
  const isVisible = useIsVisible(ref);

  return (
    <div
      className={cn(
        "flex min-h-svh w-full flex-col justify-between text-center text-background",
        `${isVisible ? "animate-fadein" : "opacity-0"}`,
      )}
      id="entries"
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <h1 className="-mt-4 bg-primary p-4 text-2xl text-foreground">
        Check out my work below
      </h1>
      <div className="flex-center h-fitw-full flex-col">
        <Accordion type="single" collapsible className="w-full">
          {Entries.map((e, i) => (
            <AccordionItem
              key={i}
              value={`${i}`}
              className="border-b border-background"
            >
              <AccordionTrigger
                data-twe-ripple-init
                data-twe-ripple-color="light"
                data-twe-ripple-radius="20"
                className="flex-center transtition-all hover:color-contrast-hover gap-2 p-4 font-bold ease-in-out hover:no-underline"
              >
                <div
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  data-twe-ripple-unbound="true"
                  data-twe-ripple-radius="20"
                >
                  {e.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex-center w-full">
                {e.node}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div></div>
    </div>
  );
};
export default PortfolioList;

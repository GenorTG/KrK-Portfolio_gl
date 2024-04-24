import PersonalInfoCard from "@/components/PersonalInfoCard";
import { Button } from "@/components/ui/button";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type WelcomeProps = {
  scrollTo: React.RefObject<HTMLElement>;
};

const Welcome = ({ scrollTo }: WelcomeProps) => {
  useEffect(() => {}, []);
  const ref = useRef() as React.RefObject<HTMLElement>;
  const isVisible = useIsVisible(ref);

  return (
    <div
      className={cn(
        "flex-center min-h-svh flex-col gap-6",
        `${isVisible ? "animate-fadein" : "opacity-0"}`,
      )}
      ref={ref as React.LegacyRef<HTMLDivElement>}
    >
      <PersonalInfoCard />
      <Button
        className="text-2xl"
        onClick={() =>
          scrollTo.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >{`Scroll down to see my work`}</Button>
    </div>
  );
};
export default Welcome;

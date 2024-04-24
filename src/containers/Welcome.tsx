import PersonalInfoCard from "@/components/PersonalInfoCard";
import { useIsVisible } from "@/lib/hooks/useIsVisible";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type WelcomeProps = {
  scrollTo: React.RefObject<HTMLElement>;
};

const Welcome = ({ scrollTo }: WelcomeProps) => {
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
      <PersonalInfoCard scrollTo={scrollTo} />
    </div>
  );
};
export default Welcome;

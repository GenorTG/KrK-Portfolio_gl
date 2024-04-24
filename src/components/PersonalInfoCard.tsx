import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type PersonalInfoCardProps = {
  scrollTo: React.RefObject<HTMLElement>;
};

const PersonalInfoCard = ({ scrollTo }: PersonalInfoCardProps) => {
  const [visibilityCount, setVisibilityCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibilityCount < 8) {
        setVisibilityCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval); // Stop the interval when visibilityCount reaches 8
      }
    }, 1000); // Run every second

    return () => clearInterval(interval);
  }, [visibilityCount]);

  return (
    <div
      className={cn(
        "h-full w-full max-w-[700px] flex-col border-2 border-primary p-4 text-background",
        `${visibilityCount > 0 ? "animate-fadein" : "opacity-0"}`,
      )}
    >
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-4 font-bold">
          <h1
            className={cn(
              "text-4xl font-bold text-primary",
              `${visibilityCount > 1 ? "animate-fadein" : "opacity-0"}`,
            )}
          >
            Hi.
          </h1>
          <div
            className={cn(
              "flex flex-row items-end justify-start gap-2 text-2xl font-bold",
              `${visibilityCount > 2 ? "animate-fadein" : "opacity-0"}`,
            )}
          >
            <p>My name is</p>
            <p className="text-3xl text-primary">Chris.</p>
          </div>
          <p
            className={cn(
              "text-2xl",
              `${visibilityCount > 3 ? "animate-fadein" : "opacity-0"}`,
            )}
          >
            Welcome to my portfolio.
          </p>
        </div>
        <img
          src="/assets/cool.png"
          alt="cool"
          className={cn(
            "size-20",
            `${visibilityCount > 4 ? "animate-fadein" : "opacity-0"}`,
          )}
        />
      </div>

      <Button
        className={cn(
          "text-xl",
          `${visibilityCount > 5 ? "animate-fadein" : "opacity-0"}`,
        )}
        onClick={() =>
          scrollTo.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >{`Scroll down to see my work`}</Button>
    </div>
  );
};
export default PersonalInfoCard;

// className={cn(
//   "",
//   `${visibilityCount > 2 ? "animate-fadein" : "opacity-0"}`,
// )}

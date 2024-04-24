import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const PersonalInfoCard = () => {
  const [visibilityCount, setVisibilityCount] = useState(0);

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
        "h-full w-full max-w-[700px] flex-col border-primary text-background",
        `${visibilityCount > 0 ? "animate-fadein" : "opacity-0"}`,
      )}
    >
      <div className="flex flex-col gap-4 font-bold">
        <h1
          className={cn(
            "text-4xl font-bold",
            `${visibilityCount > 1 ? "animate-fadein" : "opacity-0"}`,
          )}
        >
          Hi.
        </h1>
        <p
          className={cn(
            "text-2xl font-bold",
            `${visibilityCount > 2 ? "animate-fadein" : "opacity-0"}`,
          )}
        >
          My name is Chris.
        </p>
      </div>
    </div>
  );
};
export default PersonalInfoCard;

<div></div>;

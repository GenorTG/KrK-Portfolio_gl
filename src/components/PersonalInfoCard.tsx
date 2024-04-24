import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";

type PersonalInfoCardProps = {
  scrollTo: React.RefObject<HTMLElement>;
};

const PersonalInfoCard = ({ scrollTo }: PersonalInfoCardProps) => {
  const [visibilityCount, setVisibilityCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibilityCount <= 7) {
        setVisibilityCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval); // Stop the interval when visibilityCount reaches 8
      }
    }, 1000); // Run every second

    return () => clearInterval(interval);
  }, [visibilityCount]);

  const downloadPDF = () => {
    const pdfUrl = "/assets/KrzysztofKutniowskiCV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "KrzysztofKutniowskiCV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={cn(
        "flex h-full w-full max-w-[700px] flex-col items-center gap-10 border-2 border-primary p-4 text-background",
        `${visibilityCount > 0 ? "animate-fadein" : "opacity-0"}`,
      )}
    >
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col gap-4 font-bold">
          <h1
            className={cn(
              "w-fit text-4xl font-bold text-primary",
              `${visibilityCount > 1 ? `${visibilityCount > 2 ? "hover:animate-heartbeat" : "animate-fadein"}` : "opacity-0"}`,
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
            <p className="text-3xl text-primary hover:animate-heartbeat">
              Chris.
            </p>
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
          src="/assets/Kface.png"
          alt="cool"
          className={cn(
            "size-[140px] border-2 border-primary",
            `${visibilityCount > 4 ? `${visibilityCount > 5 ? "hover:animate-heartbeat" : "animate-fadein"}` : "opacity-0"}`,
          )}
        />
      </div>
      <div
        className={cn(
          "flex flex-col items-start gap-4",
          `${visibilityCount > 4 ? "animate-fadein" : "opacity-0"}`,
        )}
      >
        <p>
          I am a developer that is constantly striving to improve his skills and
          knowledge.
        </p>
        <p>{`I'm currently focusing my efforts on mastering React and it's various libraries.`}</p>
      </div>
      <div
        className={cn(
          "flex-center flex-col gap-2",
          `${visibilityCount > 5 ? "animate-fadein" : "opacity-0"}`,
        )}
      >
        <Button
          className={cn("w-fit text-xl  hover:animate-heartbeat")}
          onClick={() =>
            scrollTo.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >{`Scroll down to see my work`}</Button>
        <p
          className={cn(
            "",
            `${visibilityCount > 6 ? "animate-fadein" : "opacity-0"}`,
          )}
        >
          Or...
        </p>
        <div
          className={cn(
            "flex flex-row items-center gap-4",
            `${visibilityCount > 7 ? "animate-fadein" : "opacity-0"}`,
          )}
        >
          <h1>Check out my:</h1>
          <Button asChild className="flex gap-2  hover:animate-heartbeat">
            <a
              href="https://www.linkedin.com/in/krzysztofkutniowski/"
              rel="noreferrer"
              target="_blank"
            >
              <LiaLinkedin />
              <p>LinkedIn</p>
            </a>
          </Button>
          <Button asChild className="flex gap-2  hover:animate-heartbeat">
            <a
              href="https://github.com/GenorTG"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub />
              <p>Github</p>
            </a>
          </Button>
          <Button
            className="flex gap-2  hover:animate-heartbeat"
            onClick={downloadPDF}
          >
            <FaFilePdf />
            CV
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfoCard;

// className={cn(
//   "",
//   `${visibilityCount > 2 ? "animate-fadein" : "opacity-0"}`,
// )}

import { Links, Tech } from "@/constants/data";
import { BiCool } from "react-icons/bi";
import { Button } from "./ui/button";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Ripple, initTWE } from "tw-elements";
initTWE({ Ripple }, { allowReinits: true });

type InforCardProps = {
  image: string;
  header: string;
  subheader: string;
  info: string[];
  links: Links[];
  techstack?: Tech[];
};

const InfoCard = ({
  image,
  header,
  subheader,
  info,
  links,
  techstack,
}: InforCardProps) => {
  return (
    <div>
      <div className="color-contrast-border flex-center w-full max-w-[700px] flex-col gap-4 p-4 md:mx-4">
        <div className="flex-center w-full flex-col sm:flex-row">
          <h1 className="w-full text-left text-3xl font-bold text-primary">
            {header}
          </h1>
          <img src={image} alt="logo" className="h-20 w-20" />
          <p className="w-full text-right text-xl font-bold text-background">
            {subheader}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-3 flex flex-col gap-2 text-white">
            {info.map((t, i) => (
              <p className="w-full text-left text-lg" key={i}>
                {t}
              </p>
            ))}
          </div>
          {techstack && (
            <div className="flex-center text-md flex-1 flex-col gap-2">
              <p className="text-xl text-white">Tech stack</p>
              <div className="flex-center flex-row flex-wrap gap-2 md:flex-col">
                {techstack.map((t, i) => (
                  <div
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    data-twe-ripple-radius="20"
                    data-twe-ripple-centered="true"
                    className="color-contrast-border hover:color-contrast-border-hover flex-center w-fit cursor-default flex-row gap-2 text-nowrap px-2 py-1 transition-all ease-in-out md:w-full"
                    key={i}
                  >
                    {t.icon}
                    <p>{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex-center flex-col gap-4 md:flex-row">
          {links.map((l, i) => (
            <Button
              className="color-contrast-border-hover hover:color-contrast-border rounded-none text-xl"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              data-twe-ripple-radius="20"
              key={i}
              asChild
            >
              {l.type === "github" ? (
                <a
                  className="flex-center gap-2"
                  href={l.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                  <p>Github</p>
                </a>
              ) : l.type === "website" ? (
                <a
                  className="flex-center gap-2"
                  href={l.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiCool />
                  <p>Website</p>
                </a>
              ) : (
                <a
                  className="flex-center gap-2"
                  href={l.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                  <p>Linked In</p>
                </a>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InfoCard;

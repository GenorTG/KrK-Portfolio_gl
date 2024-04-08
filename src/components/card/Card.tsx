interface TextItem {
  text: string;
}

interface LinkItem {
  link: string;
  name: string;
}

interface CardProps {
  head: string;
  subhead?: string;
  texts: TextItem[];
  links?: LinkItem[];
  img?: string;
}

const Card = ({ head, subhead, texts, links, img }: CardProps) => {

  return (
    <div className="flex justify-center items-center flex-col text-center">
      {img && (
        <img src={img} alt="img" className="relative size-20 -top-2 rounded-full hover:animate-spin transition-all ease-in-out"/>
      )}
      <div className="flex justify-start items-center flex-col bg-mainLight w-3/4 rounded-xl p-4">
        <h1 className="text-4xl font-bold mb-3 text-mainOrange">{head}</h1>
        { subhead && (
          <p className="text-4xl font-bold mb-4 text-mainOrange">{subhead}</p>
        )}
        {texts.map((text, index) => (
          <p key={index} className="mb-2 ">{text.text}</p>
        ))}
      </div>
      
      {links && (
        <div className="bg-mainBlue rounded-xl mt-4 p-2">
          <p className="m-2">
            Check out relevant links below
          </p>
          {links?.map((link, index) => (
            <a href={link.link} target="_blank" rel="noreferrer" key={index}>
              <button 
                type="button"
                className="p-2 rounded-md m-2 bg-mainOrange text-white text-bold hover:bg-white transition-all ease-in-out hover:font-bold hover:text-mainOrange" 
              >{link.name}</button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default Card;
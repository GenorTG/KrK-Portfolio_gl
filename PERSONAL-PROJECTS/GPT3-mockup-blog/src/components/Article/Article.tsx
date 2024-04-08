import React from "react";
import './Article.scss';



interface ArticleProps {
  image: string;
  alt: string;
  date: string;
  title: string;
}

const Article:React.FC<ArticleProps> = ({image, alt, date, title}) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-card'>
        <div className='gpt3__article-image'>
          <img src={image} alt={alt} />
        </div>
        <div className='gpt3__article-content'>
          <div className='gpt3__article-date'>{date}</div>
          <div className='gpt3__article-title'>{title}</div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article;

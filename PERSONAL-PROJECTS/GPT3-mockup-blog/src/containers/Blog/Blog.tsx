import React from "react";
import './Blog.scss';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const articleData = [
  {
    image: blog02,
    alt: 'blog02',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021'
  },
  {
    image: blog03,
    alt: 'blog03',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021'
  },
  {
    image: blog04,
    alt: 'blog04',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021'
  },
  {
    image: blog05,
    alt: 'blog05',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021'
  },
]

const Blog:React.FC = () => {
  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <h1 className='gradient__text'>A lot is happening,<br />We are blogging about it.</h1>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-left'>
          <Article image={blog01} alt='blog01' date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className='gpt3__blog-container-right'>
          <div className='gpt3__blog-container-right-top'>
            {articleData.slice(0, 2).map((item, index) => (
            <Article image={item.image} alt={item.alt} title={item.title} date={item.date} key={item.title + index} />
            ))}
          </div>
          <div className='gpt3__blog-container-right-bottom'>
            {articleData.slice(0, 2).map((item, index) => (
            <Article image={item.image} alt={item.alt} title={item.title} date={item.date} key={item.title + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;

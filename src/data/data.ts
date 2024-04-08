import codegif from '/assets/codegif.gif';
import gpt3 from '/assets/gpt3.png';
import DoggyLogo from '/assets/DoggyLogo.png';

interface Redirect {
  name: string;
  page: string;
}

export const Redirects: Redirect[] = [
  {
    name: 'Home',
    page: '/'
  },
  {
    name: 'Gpt3 mockup blog',
    page: '/project/gpt3'
  },
  {
    name: 'PetPins - a social media mockup site',
    page: '/project/PetPins'
  }
];

export const homeDetails = {
  header: 'Hi. I\'m Chris.',
  subhead: 'Welcome to my site.',
  image: codegif,
  texts: [
    {
      text: 'I\'m a young (30 is still young!) web developer that\'s always looking to improve his skills.'
    },
    {
      text: 'This website serves as a hub, where I can showcase some of my work.'
    },
    {
      text: 'In the expandable header above you can check out my work.'
    },
  ],
  links: [
    {
      link: 'https://github.com/GenorTG/KrK-Portfolio_gl',
      name: 'GitHub Repo for this website'
    }
  ]
};

export const gpt3Details = {
  header: 'GPT3 Blog',
  subhead: 'Front page',
  image: gpt3,
  texts: [
    {
      text: 'This is a front page for a blog-like website I made following a course by Javascript Mastery on YT.'
    },
    {
      text: 'This website is made using Vite + React + Typescript, using custom written SCSS styles following a BEM naming convention.'
    },
    {
      text: 'This site is meant to be a purely presentational skeleton, so no additional functionality was developed.'
    },
  ],
  links: [
    {
      link: 'https://gpt3-mockup-blog.vercel.app/',
      name: 'Website' 
    },
    {
      link: 'https://github.com/GenorTG/KrK-Portfolio_gl/tree/main/PERSONAL-PROJECTS/GPT3-mockup-blog',
      name: 'GitHub Repo' 
    },
  ]
};

export const PetPinsDetails = {
  header: 'PetPins',
  subhead: 'A social media website',
  image: DoggyLogo,
  texts: [
    {
      text: 'This is a \'Pinterest\' like looking social media website I made following an older Javascript Mastery course.'
    },
    {
      text: 'This website is made using Vite + React, using tailwind for most of it\'s styles.'
    },
    {
      text: 'The hosting server for the files is Sanity. Users can login using their google account (no sensitive data is being stored), post pins, save the pins they like, and comment on other people\'s pins.'
    },
  ],
  links: [
    {
      link: 'https://petpins.vercel.app/',
      name: 'Website' 
    },
    {
      link: 'https://github.com/GenorTG/KrK-Portfolio_gl/tree/main/PERSONAL-PROJECTS/PetPins/petpins_frontend',
      name: 'GitHub Repo' 
    },
  ]
  
};
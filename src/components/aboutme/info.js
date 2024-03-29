import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const aboutMeText = (
  <>
    Hi, I&apos;m <strong>Aya</strong>. I&apos;m a full stack engineer who likes
    to solve problems and{' '}
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        'create reliable SaaS software powered by ML/AI.',
        2000,
        'develop seamless and secure full stack applications using React.',
        2000,
        'facilitate agile practices to increase team productivity and efficiency.',
        2000,
        'continuously learn new technologies and develop meaningful applications.',
        2000,
      ]}
      omitDeletionAnimation
      speed={20}
      style={{
        display: 'inline',
        color: 'blueviolet',
        animation: 'rainbow-text 10s infinite',
      }}
      repeat={Infinity}
    />
  </>
);

export const experienceInfo = [
  {
    start: '2023',
    end: 'now',
    role: 'Senior Development Software Engineer',
    employer: 'CarGurus',
    tech: 'JavaScript',
    description: 'Check back for updates!',
  },
  {
    start: '2022',
    end: '2023',
    role: 'Senior Software Engineer',
    employer: 'Haven Technologies',
    tech: 'TypeScript, React, NodeJS, Express, PostgreSQL, Gitlab, AWS S3, Docker, Kubernetes, Splunk',
    description:
      'SaaSified the claims platform to handle intake and display of data for multiple clients each with its own release schedule',
  },
  {
    start: '2019',
    end: '2022',
    role: 'Full Stack Software Engineer',
    employer: 'Liberty Mutual Insurance',
    tech: 'JavaScript, React, NodeJS, Express, MongoDB, Git, AWS, Python, Git, Kubernetes, Splunk, Datadog, Jenkins, Bamboo',
    description:
      'Worked with data scientists to predict and assist customer choice using machine learning models and AB Tested model on production',
  },
  {
    start: 'Summer 2018',
    role: 'TechStart Full Stack Intern',
    employer: 'Liberty Mutual Insurance',
    tech: 'JavaScript, React, NodeJS, Express, Java, Kotlin, SpringBoot, AWS Gateway, AWS Lambda, MongoDB, DynamoDB, Git, Splunk, Bamboo',
    description:
      'Developed an AB Testing platform consisting of seven applications and microservices to collect data and display a summary of customer interactions on the production website for product stakeholders',
  },
  {
    start: 'Spring 2018',
    role: 'Machine Learning Research Assistant',
    employer: 'Boston University',
    tech: 'Python, Scikit Learn, Tensorflow, SciPy, MATLAB',
    description:
      'Ran multiple machine learning algorithms to find directional relationships between government-owned news sources and entity-owned news sources',
  },
  {
    start: 'Spring 2018',
    role: 'Co-op Individual Contributor',
    employer: 'Armored Things',
    tech: 'Java, Android Studio, Git, MongoDB, FireBase',
    description:
      'Participated in the creation and deployment to the Google Play Store of an Android Application called Latch Mobile, which measured the amount of time users are on a particular app and allowed users to add custom alerts when they went over a set time limit.',
  },
  {
    start: '2017',
    end: '2018',
    role: 'Engineering Teaching Assistant',
    employer: 'Boston University',
    tech: 'C++, Python, Verilog',
    description:
      'Assisted university professors by running labs, holding office hours and creating an automation script to grade assignment submissions for three undergraduate level classes. *Nominated for Student Employee of the Year (Teaching Assistant Division)',
  },
  {
    start: '2014',
    end: '2016',
    role: 'Secondary Mathematics Educator',
    employer: 'Teach For America',
    tech: 'Communication, Relationship Management',
    description:
      'Taught alegbra, geometry and statistics in Lawrence, MA and Chelsea, MA',
  },
];

export const projects = [
  {
    title: 'C(h)at-GPT Chatbot React FrontEnd',
    image: '/catchatbot.png',
    description:
      'The React front-end powered by Material-UI for personal webpage featuring a cat chatbot using OpenAI API',
    type: 'project',
    link: 'https://github.com/ayshmz/ayshmz.github.io',
  },
  {
    title: 'Backend RestAPI using NodeJS and Express',
    image: '/catchat_backend.png',
    type: 'project',
    description:
      'The NodeJS/Express backend using PostgreSQL for cat chatbot using OpenAI API hosted on Railway',
    link: 'https://github.com/ayshmz/chatgptbackend',
  },
  {
    title: 'Medium Blog Post on ChatGPT',
    image: '/medium_chatgpt_project.png',
    description:
      'A blog on how I created the full stack application using ReactJS, NodeJS/Express with a PostgreSQL backend for free',
    type: 'blog',
    link: 'https://medium.com/@aya.shimizu/how-i-made-a-chatgpt-project-and-hosted-it-on-the-cloud-for-free-7b547312add7',
  },
];

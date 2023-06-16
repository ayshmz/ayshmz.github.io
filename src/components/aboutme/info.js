import React from 'react';

export const aboutMeText = (
  <>
    Hi, I&apos;m <strong>Aya</strong>. I&apos;m a full stack engineer who likes
    to solve problems and{' '}
    <p
      style={{
        display: 'inline',
        color: 'blueviolet',
        animation: 'rainbow-text 10s infinite',
      }}
    >
      create reliable SaaS software powered by ML/AI.
    </p>
  </>
);

export const experienceInfo = [
  {
    start: '2022',
    end: 'Now',
    role: 'Senior Software Engineer',
    employer: 'Haven Technologies',
    tech: 'TypeScript, React, NodeJS, Express, PostgreSQL, Gitlab, AWS S3, Docker, Kubernetes, Splunk',
    description:
      'SaaSified the claims platform to handle intake and display of data for multiple clients each with its own release schedule',
  },
  {
    start: '2018',
    end: '2022',
    role: 'Full Stack Software Engineer',
    employer: 'Liberty Mutual Insurance',
    tech: 'JavaScript, React, NodeJS, Express, MongoDB, Git, AWS, Python, Git, Kubernetes, Splunk, Datadog, Jenkins, Bamboo',
    description:
      'Worked with data scientists to predict and assist customer choice using machine learning models and AB Tested model on production',
  },
  {
    start: '2018',
    role: 'Machine Learning Research Assistant',
    employer: 'Boston University',
    tech: 'Python, Scikit Learn, Tensorflow, SciPy, MATLAB',
    description:
      'Ran multiple machine learning algorithms to find directional relationships between government-owned news sources and entity-owned news sources',
  },
  {
    start: '2018',
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
    title: 'Some title',
    image: '/cat.png',
    description: 'description',
  },
  {
    title: 'Some title',
    image: '/cat.png',
    description: 'description',
  },
  {
    title: 'Some title',
    image: '/cat.png',
    description: 'description',
  },
];

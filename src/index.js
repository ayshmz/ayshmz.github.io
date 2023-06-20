import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Landing from './pages/Landing';
import Home from './pages/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/v1',
    element: <Landing />,
    children: [],
  },
  {
    path: '/projects',
    element: <Projects />,
    children: [],
  },
  {
    path: '/about',
    element: <AboutMe />,
    children: [],
  },
  {
    path: '/',
    element: <Home />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
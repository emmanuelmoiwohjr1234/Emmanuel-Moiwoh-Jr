import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

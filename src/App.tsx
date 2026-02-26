import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import Project from './pages/Project/Project';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/works/:projectId',
    element: <Project />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

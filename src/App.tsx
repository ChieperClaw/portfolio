import { createBrowserRouter, RouterProvider } from 'react-router';

import { Layout } from './components/Layout/Layout';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { ProjectPage } from './pages/Project/Project';
import Works from './pages/Works/Works';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/works', element: <Works /> },
            { path: '/works/:projectId', element: <ProjectPage /> },
            { path: '/about', element: <About /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;

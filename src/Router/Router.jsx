import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import { ForCreatorPage } from '../Pages/ForCreatorPage';
import { ForBusinessPage } from '../Pages/ForBusinessPage';
import { LoginSignupPage } from '../Pages/LoginSignupPage';
import { Contact } from '../Pages/Contact';
import { Admin } from '../Pages/Admin';
import Dashboard  from '../Pages/Dashboard';
import { AdminLogin } from '../Pages/AdminLogin';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/creator',
    element: <App />,
    children: [{ path: '/creator', element: <ForCreatorPage /> }],
  },
  {
    path: '/business',
    element: <App />,
    children: [{ path: '/business', element: <ForBusinessPage /> }],
  },
  {
    path: '/login',
    element: <App />,
    children: [{ path: '/login', element: <LoginSignupPage /> }],
  },
  {
    path: '/contact',
    element: <App />,
    children: [{ path: '/contact', element: <Contact /> }],
  },
  {
    path: '/admindashboard',
    element: <App />,
    children: [{ path: '/admindashboard', element: <Admin /> }],
  },
  {
    path: '/admin',
    element: <App />,
    children: [{ path: '/admin', element: <AdminLogin /> }],
  },
  {
    path: '/dashboard',
    element: <App />,
    children: [{ path: '/dashboard', element: <Dashboard /> }],
  },
]);

export default router;

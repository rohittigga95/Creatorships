import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import { ForCreatorPage } from '../Pages/ForCreatorPage';
import { ForBusinessPage } from '../Pages/ForBusinessPage';
import { LoginSignupPage } from '../Pages/LoginSignupPage';
import { Contact } from '../Pages/Contact';
import { Admin } from '../Pages/Admin';


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
    path: '/account',
    element: <App />,
    children: [{ path: '/account', element: <LoginSignupPage /> }],
  },
  {
    path: '/contact',
    element: <App />,
    children: [{ path: '/contact', element: <Contact /> }],
  },
  {
    path: '/admin',
    element: <App />,
    children: [{ path: '/admin', element: <Admin /> }],
  },
]);

export default router;

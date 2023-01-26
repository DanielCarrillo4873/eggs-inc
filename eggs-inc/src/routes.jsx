import App from './App.jsx';
import Home from './pages/Home.jsx';
import Providers from './pages/Providers.jsx';
import Clients from './pages/Clients.jsx';
import Purchases from './pages/Purchases.jsx';
import Sales from './pages/Sales.jsx';

export default [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/providers',
        element: <Providers />,
      },
      {
        path: '/clients',
        element: <Clients />,
      },
      {
        path: '/purchases',
        element: <Purchases/>
      },
      {
        path: '/sales',
        element: <Sales />
      }
    ]
  },
];
import App from "./components/App";
import ErrorPage from "./components/errorPage";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Hero from "./components/Hero";

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      }
    ],
  },

];

export default routes;
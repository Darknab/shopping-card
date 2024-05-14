import App from "./components/App";
import ErrorPage from "./components/errorPage";

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
];

export default routes;
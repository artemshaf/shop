import { useRoutes } from "react-router-dom";
import { withLayout } from "./components/Pages-components/Layout/Layout";
import { About } from "./pages/About/About";
import { Accessories } from "./pages/Accessories/Accessories";
import { Beauty } from "./pages/Beauty/Beauty";
import { Blog } from "./pages/Blog/Blog";
import { Contact } from "./pages/Contact/Contact";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { PNF } from "./pages/PNF/PNF";
import { ProductPage } from "./pages/ProductPage/ProductPage";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/:sex",
      element: <DetailPage />,
    },
    {
      path: "/:sex/:id",
      element: <ProductPage />,
    },
    {
      path: "/beauty",
      element: <Beauty />,
    },
    {
      path: "/accessories",
      element: <Accessories />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PNF />,
    },
  ]);

  return routes;
}

export const AppExp = withLayout(App);

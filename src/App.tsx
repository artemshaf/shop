import { useEffect } from "react";
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
import ShoppingCard from "./pages/ShoppingCard/ShoppingCard";
import {
  getClothes,
  selectError,
  selectIsLoading,
} from "./store/clothes/clothes-slice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { RiseLoader } from "react-spinners";

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

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => selectIsLoading(state));
  const isError = useAppSelector((state) => selectError(state));

  useEffect(() => {
    dispatch(getClothes());
    console.log(getClothes());
  }, []);

  if (isLoading) {
    return (
      <div className="loader-block">
        <RiseLoader color="rgb(60, 166, 170)" />
      </div>
    );
  }

  if (isError !== null) {
    return <h1>{isError}</h1>;
  }

  return routes;
}

export const AppExp = withLayout(App);

import { Route, Routes, useRoutes } from "react-router-dom";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { PNF } from "./pages/PNF/PNF";

interface IApp {
  props: number;
}

function App({ props }: IApp) {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/:params",
          element: <DetailPage />,
        },
      ],
    },
    {
      path: "/*",
      element: <DetailPage />,
    },
  ]);

  console.log(routes);

  return routes;
  /* <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="sex" element={<DetailPage />} />
          <Route path="men" element={<DetailPage />} />
          <Route path="*" element={<PNF />} />
        </Route>
      </Routes> */
}

export default App;

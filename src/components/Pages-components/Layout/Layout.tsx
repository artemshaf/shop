import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useLayoutEffect,
} from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import { rootStore } from "../../../store/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface ILayoutProps {
  children: ReactNode | ReactElement;
}

const scrollToPosition = (top = 0) => {
  try {
    window.scroll({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  } catch (_) {
    window.scrollTo(0, top);
  }
};

const Layout = ({ children }: ILayoutProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    scrollToPosition();
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={rootStore}>
          <Layout>
            <Component {...props} />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
  };
};

import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface ILayoutProps {
  children: ReactNode | ReactElement;
}

const Layout = ({ children }: ILayoutProps) => {
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
) =>
  function withLayoutComponent(props: T): JSX.Element {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Layout>
            <Component {...props} />
          </Layout>
        </BrowserRouter>
      </React.StrictMode>
    );
  };

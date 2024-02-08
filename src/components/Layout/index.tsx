import { FC } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import style from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style["container"]}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

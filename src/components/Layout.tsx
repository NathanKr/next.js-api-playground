import { FC, ReactNode } from "react";
import Footer from "./Footer";
import styles from "styles/layout.module.css";
import { Divider } from "@mui/material";
import NavBar from "./gen-ui/NavBar";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <NavBar />
      <Divider/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import MuiTabs from "./MuiTabs";
import styles from "styles/navbar.module.css";
import { Divider } from "@mui/material";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <MuiTabs />
      </div>
  );
};

export default NavBar;

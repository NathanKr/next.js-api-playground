import MuiTabs from "./MuiTabs";
import styles from "styles/navbar.module.css";
import { APP_NAME } from "src/utils/constants";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <h1>{APP_NAME}</h1>
      <MuiTabs />
      </div>
  );
};

export default NavBar;

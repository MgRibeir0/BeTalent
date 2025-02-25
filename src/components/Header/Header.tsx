import styles from "./Header.module.css";
import { Logo } from "../../icons";

function Header() {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  );
}

export default Header;

import { useState } from "react";
import "./styles/reset.css";
import "./styles/global.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import EmployeesList from "./components/EmployeesList/EmployeesList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles["root-container"]}>
      <Header />
      <div className={styles.content}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <EmployeesList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;

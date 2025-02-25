import { SearchIcon } from "../../icons";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Funcionários</span>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Pesquisar"
          className={styles.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default SearchBar;

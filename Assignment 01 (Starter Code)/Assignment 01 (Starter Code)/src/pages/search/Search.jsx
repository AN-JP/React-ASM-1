import SearchPopup from "../../components/Search/SearchPopup";
import SearchList from "../../components/Search/SearchList";

import styles from "./Search.module.css";
import NavBar from "../../components/NavBar/NavBar";

const Search = () => {
  return (
    <div>
      <div className={styles.home}>
        <NavBar />
      </div>
      <div className={styles.search}>
        <SearchPopup />
        <SearchList />
      </div>
    </div>
  );
};

export default Search;

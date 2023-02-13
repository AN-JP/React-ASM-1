import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.search_popup}>
      <h4>Search</h4>
      <form onSubmit={handleSubmit}>
        <h6>Destination</h6>
        <input type="text" className={styles.a} />
        <h6>Check-in Date</h6>
        <input
          type="text"
          className={styles.a}
          placeholder="06/24/2022 to 06/24/2022"
          style={{ fontWeight: "700" }}
        />

        <h6>Options</h6>
        <div className={styles.input_text}>
          <label>min price per night</label>
          <input type="text" />

          <label>Max price per night</label>
          <input type="text" />

          <label>Adult</label>
          <input type="text" placeholder="1" />

          <label>Children</label>
          <input type="text" placeholder="0" />

          <label>Room</label>
          <input type="text" placeholder="1" />

          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchPopup;

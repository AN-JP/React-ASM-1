import styles from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  const list = props.item.map((e) => (
    <div className={styles.search_container} key={e.name}>
      <div>
        <img src={e.image_url} alt="2" />
      </div>

      <div className={styles.center}>
        <h3>{e.name}</h3>
        <p>{`${e.distance} from center`}</p>
        <p>{e.tag}</p>
        <p style={{ fontWeight: "800" }}>{e.description}</p>
        <p>{e.type}</p>
        {e.free_cancel && (
          <p style={{ fontWeight: "800", color: "#rgb(81 133 4)" }}>
            Free canncellation
          </p>
        )}
        {e.free_cancel && (
          <p style={{ fontWeight: "600", color: "rgb(4 202 37)" }}>
            You can cancel later, so lock in this great price today!
          </p>
        )}
      </div>

      <div className={styles.right}>
        <div>
          <h4>{e.rate_text}</h4>
          <span>{e.rate}</span>
        </div>
        <div>
          <h2>{`$${e.price}`}</h2>
          <p>includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  ));
  return list;
};

export default SearchListItem;

import styles from "./City.module.css";

const City = () => {
  const dataCity = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  const cityList = dataCity.map((e) => (
    <div key={e.name} className={styles.a}>
      <img src={e.image} alt="s" className={styles.cityImg} />
      <div className={styles.text}>
        <h1>{e.name}</h1>
        <h3>{e.subText}</h3>
      </div>
    </div>
  ));

  return <div className={styles.container}>{cityList}</div>;
  // return cityList;
};

export default City;

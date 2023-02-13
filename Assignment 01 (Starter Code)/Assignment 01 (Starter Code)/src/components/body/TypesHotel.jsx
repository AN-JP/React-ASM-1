import styles from "./TypesHotel.module.css";

const TypesHotel = () => {
  const dataTypesHotel = [
    {
      id: 1,
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    { id: 2, name: "Apartments", count: 2331, image: "./images/type_2.jpg" },
    { id: 3, name: "Resorts", count: 2331, image: "./images/type_3.jpg" },
    { id: 4, name: "Villas", count: 2331, image: "./images/type_4.jpg" },
    { id: 5, name: "Cabins", count: 2331, image: "./images/type_5.jpg" },
  ];

  const hoteltype = dataTypesHotel.map((e) => (
    <div key={e.id}>
      <img src={e.image} alt="hotel" className={styles.typeimg} />
      <h5>{e.name}</h5>
      <p>{`${e.count} hotels`}</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h4>Browse by property type</h4>
      <div className={styles.hotel}>{hoteltype}</div>
    </div>
  );
};

export default TypesHotel;

import styles from "./HotelList.module.css";

const HotelList = () => {
  const dataHotel = [
    {
      id: 1,
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      id: 2,
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      id: 3,
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      id: 4,
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  const hotelList = dataHotel.map((e) => (
    <div key={e.id}>
      <img src={e.image_url} alt="hotel" />
      <a href="/detail">{e.name}</a>
      <p>{e.city}</p>
      <h5>{`Starting from $${e.price}`}</h5>
      <p>
        <span>{e.rate}</span> {e.type}
      </p>
    </div>
  ));

  return (
    <div className={styles.container_hotel}>
      <h4>Homes guests love</h4>
      <div className={styles.hotelList}>{hotelList}</div>
    </div>
  );
};

export default HotelList;

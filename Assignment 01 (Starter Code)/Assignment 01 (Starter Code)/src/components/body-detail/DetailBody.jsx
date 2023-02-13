import styles from "./DetailBody.module.css";
import { IoLocationSharp } from "react-icons/io5";

const DetailBody = () => {
  const dataDetail = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 945,
  };

  const dataimage = dataDetail.photos.map((e) => (
    <img src={e} key={Math.random()} />
  ));

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <h1>{dataDetail.name}</h1>

        <p>
          <IoLocationSharp />
          {dataDetail.address}
        </p>
        <p style={{ color: "blue" }}>{dataDetail.distance}</p>
        <p style={{ color: "#00c700" }}>{dataDetail.price}</p>
        <div className={styles.imglist}>{dataimage}</div>
        <button>Reserve or Book Now</button>
      </div>
      <div className={styles.bottom}>
        <div>
          <h2>{dataDetail.title}</h2>
          <p>{dataDetail.description}</p>
        </div>
        <div>
          <h5>Perfect for a 9-night stay!</h5>
          <p>
            Located in the real heart of Krakow,this orioerty has an excellent
            location score of 9.8!
          </p>
          <p className={styles.price}>
            <span>${dataDetail.nine_night_price}</span>
            (9 nights)
          </p>

          <button>Reserve or Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailBody;

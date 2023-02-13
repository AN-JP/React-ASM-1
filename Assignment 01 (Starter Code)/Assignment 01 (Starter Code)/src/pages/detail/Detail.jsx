import DetailBody from "../../components/body-detail/DetailBody";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Register from "../../components/register/Register";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <>
      <div className={styles.home}>
        <NavBar />
      </div>
      <div>
        <DetailBody />
      </div>
      <Register />
      <Footer />
    </>
  );
};

export default Detail;

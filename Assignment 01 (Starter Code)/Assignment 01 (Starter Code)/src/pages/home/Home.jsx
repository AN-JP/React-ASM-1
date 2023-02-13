import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Hearder/Hearder";
import City from "../../components/body/City";
import TypesHotel from "../../components/body/TypesHotel";
import HotelList from "../../components/body/HotelList";
import Register from "../../components/register/Register";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

// phần nâng cao

const Home = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  function handleSelect(ranges) {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  return (
    <>
      <div className="home">
        <NavBar />
        <Header />
      </div>
      <City />
      <TypesHotel />
      <HotelList />
      <Register />
      <Footer />
    </>
  );
};

export default Home;

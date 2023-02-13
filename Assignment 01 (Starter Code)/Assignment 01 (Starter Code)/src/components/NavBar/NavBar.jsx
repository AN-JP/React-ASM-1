import NavBarItem from "./NavBarItem";
import "./NavBar.css";

const NavBar = () => {
  const dataNavBar = [
    { id: 1, type: "Stays", icon: "fa-bed", active: true },
    { id: 2, type: "Flights", icon: "fa-plane", active: false },
    { id: 3, type: "Car rentals", icon: "fa-car", active: false },
    { id: 4, type: "Attractions", icon: "fa-bed", active: false },
    { id: 5, type: "Airport taxis", icon: "fa-taxi", active: false },
  ];
  return (
    <>
      <div>
        <h4>Booking Website</h4>
        <div className="btn">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <NavBarItem item={dataNavBar} />
    </>
  );
};

export default NavBar;

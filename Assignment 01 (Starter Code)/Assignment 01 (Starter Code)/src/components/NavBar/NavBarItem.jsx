import "./NavBarItem.css";

const NavBarItem = (props) => {
  const data = props.item.map((e) => (
    <li key={e.id}>
      <a href="#" className={`${e.active ? "radius" : ""}`}>
        <i className={`fa ${e.icon}`}></i>
        {e.type}
      </a>
    </li>
  ));
  return <ul>{data}</ul>;
};

export default NavBarItem;

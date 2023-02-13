import "./Header.css";
import { useNavigate } from "react-router-dom";

// importan phần nâng cao
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
// import { DatePicker } from "react-date-range";

import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const goSearchPage = () => {
    // location.replace("/search");

    // NOTE: cách này có thể quay lại trang cũ
    navigate("/search");
  };

  // phần nâng cao

  // state lưu cho value input
  const [saveStartDate, setSaveStartDate] = useState(new Date());
  const [saveEndDate, setSaveEndDate] = useState(new Date());

  // ẩn hiện thanh bảng daterange
  const [hidden, sethidden] = useState(true);
  const toggleModal = () => {
    sethidden(hidden ? false : true);
  };

  // state ngày tháng
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handleSelect(ranges) {
    setState([ranges.selection]);
    setSaveStartDate(ranges.selection.startDate);
    setSaveEndDate(ranges.selection.endDate);
  }

  // format lại ngày tháng
  const converStartDate =
    saveStartDate.getDate() +
    "-" +
    parseInt(saveStartDate.getMonth() + 1) +
    "-" +
    saveStartDate.getFullYear();

  const converSaveEndDate =
    saveEndDate.getDate() +
    "-" +
    parseInt(saveEndDate.getMonth() + 1) +
    "-" +
    saveEndDate.getFullYear();

  return (
    <div className="header">
      {/* modal date range */}
      <div className={`${hidden ? "hidden" : ""}`}>
        <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          className="date"
          minDate={new Date()}
          ranges={state}
          onChange={handleSelect}
        />
      </div>

      <h2>A lifetime of discounts? It's Genius.</h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button className="btn_3">Sign in / Register</button>
      <div className="input">
        <i className="fa fa-bed"></i>
        <input type="text" placeholder="where are you going" />

        <i className="fa fa-calendar"></i>

        {/* phần nâng cao */}
        <input
          type="text"
          value={`${converStartDate} to ${converSaveEndDate}`}
          onChange={handleSelect}
          onClick={toggleModal}
        />

        <i className="fa fa-female"></i>
        <input type="text" placeholder="1 adult・0 children・1 room" />
        <button className="btn_3" onClick={goSearchPage}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;

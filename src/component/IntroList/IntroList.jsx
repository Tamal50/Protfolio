import React from "react";
import "./IntroList.scss";
const IntroList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "introList active" : "introList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default IntroList;

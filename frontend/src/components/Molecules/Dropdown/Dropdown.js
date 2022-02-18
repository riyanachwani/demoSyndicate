import Button from "../../Atoms/Button";
import "./Dropdown.scss";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

import { useState } from "react";

export default function Dropdown({ children, title }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <ul>
      <li className="dropdown ">
        {/* <Button className="btn-soft dropdown-btn" onClick={toggleDropdown}>
          {title}
          {showDropdown ? (
            <RiArrowUpSLine className="icon" />
          ) : (
            <RiArrowDownSLine className="icon" />
          )}
        </Button> */}
        <Button className="dropdown-button  p-0" onClick={toggleDropdown}>
          {showDropdown ? (
            <RiArrowUpSLine className="icon fs-5 m-1 text-dark p-0 " />
          ) : (
            <RiArrowDownSLine className="icon fs-5 m-1 text-dark p-0  " />
          )}
        </Button>
        {/* Navbar Dropdown Start */}
        {showDropdown && children && (
          <ul
            className="rounded-5"
            style={{
              visibility: "visible",
            }}
          >
            {children}
          </ul>
        )}
        {/* Navbar Dropdown End */}
      </li>
    </ul>
  );
}

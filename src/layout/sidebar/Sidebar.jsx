/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {menuList} from "../../utility/menu";

const Sidebar = () => {
  const location = useLocation();

  const makeActive = (to, isLink = false) => {
    let isFound = false;

    if (isLink) {
      isFound = to === location.pathname;
    } else {
      const regex = new RegExp(to?.toLowerCase());
      isFound = regex.test(location.pathname.toLowerCase());
    }

    return isFound;
  };

  return (
    <>
      <div className="menu">
        <ul className="list-unstyled components">
          {menuList?.map((firstLevel, index) => (
            <li key={index} className="firstLevel-li block">
              <div>
                <Link
                  className={makeActive(firstLevel?.to, true) ? "active" : ""}
                  to={firstLevel?.to}
                >
                    {firstLevel?.icon}
                    <span className="tablet:hidden block">{firstLevel?.label}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";

import { Icon } from "antd";

const asideLeftNav = () => {
  return (
    <div className="aside-left-nav">
      <ul>
        <li>
          <NavLink exact to="/projects" activeClassName="active">
            <Icon type="file-add" /> <br /> PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/boq" activeClassName="active">
            <Icon type="file-add" /> <br /> BOQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default asideLeftNav;

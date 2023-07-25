import React from "react";
import "./Categories.scss";
import { NavLink, useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="categories">
      <NavLink className='nav_link' to="/">
        <div className="name">General</div>{" "}
      </NavLink>
      <NavLink className='nav_link' to="/bussiness">
        <div className="name">Business</div>
      </NavLink>

      <NavLink className='nav_link' to="/entertainment">
        <div className="name">Entertainment</div>
      </NavLink>

      <NavLink className='nav_link' to="/health">
        <div className="name">Health</div>
      </NavLink>

      <NavLink className='nav_link' to="/science">
        <div className="name">Science</div>
      </NavLink>

      <NavLink className='nav_link' to="/sports">
        <div className="name">Sports</div>
      </NavLink>

      <NavLink className='nav_link' to="/technology">
        <div className="name">Technolgy</div>
      </NavLink>
    </div>
  );
}

export default Categories;

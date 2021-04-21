import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItems = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export const MenuItem = withRouter(MenuItems);

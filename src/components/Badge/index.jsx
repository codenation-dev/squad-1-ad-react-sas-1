import React from "react";
import "./style.scss";

const Badge = ({ percentage }) => {
  return <div className="badge">{percentage}%</div>;
  }

export default Badge;

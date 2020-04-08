import React from "react";
import "./style.scss";

class Badge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="badge">{this.props.percentage}%</div>;
  }
}

export default Badge;

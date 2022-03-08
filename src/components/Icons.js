import React from "react";

function Icons(props) {
  return (
    <div className="icons">
      <i className={props.icon}></i>
      <div className="content">
        <h3>{props.num}</h3>
        <p>{props.topic}</p>
      </div>
    </div>
  );
}

export default Icons;

import React from "react";

export default function Cards(props) {
  const { el } = props;

  return (
    <div className="cards">
      <div className="color" style={{background: el.code, boxShadow: `4px 4px 41px 0px ${el.code}`}}></div>
      <div className="desc">
        <h2 style={{color: el.code}}>{el.name}</h2>
        <p>{el.description}</p>
        <b>{el.code}</b>
      </div>
    </div>
  );
}

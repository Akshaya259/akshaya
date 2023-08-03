import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.moviename} />
      <div className="card-content">
        <h2>{props.moviename}</h2>
        <p>{props.ratings}</p>
      </div>
    </div>
  );
};

export default Card;

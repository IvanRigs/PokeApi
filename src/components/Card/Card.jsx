import React from "react";

const Card = ({ title, description, imageUrl}) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "50px", marginTop: "0px" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ fontSize: "18px" }}>{description}</p>
        <a href="#" className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default Card;

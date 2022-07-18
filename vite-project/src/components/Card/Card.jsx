import React from "react";
import { useState } from "react";
import "./Card.css";

export const Card = ({ item }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="card">
      <h1 className="item_title">{item.title}</h1>
      <div className="item_cover_wrapper">
        <img className="item_cover" src={item.image} alt={item.title} />
      </div>

      <p title={item.description} className="item_desc body-text">
        {item.description}
      </p>
      <div className="flex justify-between w-full items-center">
        <h2 className="item_price">&#8377; {item.price}</h2>
        <div className="rating_wrapper flex gap-1 px-1 items-center">
          <p className="font-bold">{item.rating.rate} |</p>
          <p className="font-normal">{item.rating.count}</p>
        </div>
      </div>
      <button className="w-full py-1 card_button mt-1 mb-1">Add to Cart</button>
    </div>
  );
};

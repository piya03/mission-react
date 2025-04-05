import React from "react";
import { CDN_URL } from "../utils/constant";

export const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    info;
  return (
    <div className="res-card">
      <img className="" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h3>{sla?.deliveryTime} minutes</h3>
    </div>
  );
};


// HOC
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black p-2 text-white rounded-lg">Top Rated</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;

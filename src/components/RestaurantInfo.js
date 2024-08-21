import React from "react";
import { Shimmer } from "./shimmer";
import useResturantInfo from "../utils/useResturantInfo";
import { useParams } from "react-router";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const restInfo = useResturantInfo(resId);

  if (restInfo == null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card.card.info;
  const itemCards =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

  return (
    <>
      <h2>{name}</h2>
      <p>avg ratings:{avgRating}</p>
      <p style={{ marginTop: "10px" }}>{costForTwoMessage}</p>
      <h2>Recommended</h2>
      <ul>
        {itemCards &&
          itemCards.length > 0 &&
          itemCards.map((item) => {
            return (
              <li key={item.card.info.name}>
                {item.card.info.name} {"  "} - {item.card.info.price / 100}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RestaurantInfo;

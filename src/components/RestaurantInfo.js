import React from "react";
import { useEffect,useState } from "react";
import { Shimmer } from "./shimmer";

const RestaurantInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4893961&lng=78.3974075&restaurantId=1853&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    )
      .then((data) => data.json())
      .then((data2) => setRestInfo(data2));
  };

  if(restInfo == null)  return (
    <Shimmer />
  ) 

  const { name, avgRating, costForTwoMessage, } =
    restInfo?.data?.cards[2]?.card.card.info;

  console.log(restInfo?.data?.cards[2]?.card.card.info?.name, "res");

  return (
    <>
      <h2>{name}</h2>
      <p>avg ratings:{avgRating}</p>
      <p style={{ marginTop: "10px" }}>{costForTwoMessage}</p>
      <h2>Recommended</h2>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </>
  );
};

export default RestaurantInfo;

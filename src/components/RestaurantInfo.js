import React , { useEffect,useState } from "react";
import { Shimmer } from "./shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  const {resId}=useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = fetch(
      MENU_API+resId
    )
      .then((data) => data.json())
      .then((data2) => setRestInfo(data2));
  };

  if(restInfo == null)  return (
    <Shimmer />
  ) 

  const { name, avgRating, costForTwoMessage, } =
    restInfo?.data?.cards[2]?.card.card.info;
  const itemCards = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards


  return (
    <>
      <h2>{name}</h2>
      <p>avg ratings:{avgRating}</p>
      <p style={{ marginTop: "10px" }}>{costForTwoMessage}</p>
      <h2>Recommended</h2>
      <ul>
        {itemCards.map(item=>{
          
          return (<li key={item.card.info.name}>
            {item.card.info.name} {"  "} - {item.card.info.price/100}
          </li>)
        })}
      </ul>
    </>
  );
};

export default RestaurantInfo;

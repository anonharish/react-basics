import React, { useState } from "react";
import { Shimmer } from "./shimmer";
import useResturantInfo from "../utils/useResturantInfo";
import FoodListAccordion from "./FoodListAccordion";
import { useParams } from "react-router";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const restInfo = useResturantInfo(resId);
  const [showListItems, setShowListItems] = useState(1);
  const [isAccordionOpen,setIsAccordionOpen] = useState(false);
  if (restInfo == null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card.card.info;
  const itemCards =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;
  const categories =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) => {
        return (
          item.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <>
      <div className="w-[60%] mx-auto p-4">
        <h2 className="font-bold text-3xl mb-4 mt-4">{name}</h2>
        <p className="font-semibold mb-5">
          avg ratings: {avgRating} - {costForTwoMessage}
        </p>

        {categories.map((item, index) => {
          return (
            <FoodListAccordion
              foodCategories={item}
              key={index}
              showListItems={(showListItems == index) && isAccordionOpen ? true : false}
              setListItemsIndex={() => {
                if(showListItems !=index){
                  setShowListItems(index);
                  setIsAccordionOpen(true)
                }
                else{
                  setIsAccordionOpen(!isAccordionOpen);
                }
                
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantInfo;

import { PARENTIMAGEURL } from "../utils/constants";
const ItemCards = ({ item }) => {
  const { name,price,ratings,description,imageId, } = item?.card?.info;
  const {rating,ratingCountV2} = ratings?.aggregatedRating;


  console.log(ratings, "hello");
  return (
    <>
      <div className="flex justify-between mx-6 my-4 border-b-2 border-gray-300 pb-3" >
        <div className="w-9/12">
          <p className="text-gray-700 text-xl font-bold mb-4">{name}</p>
          <p className="text-xl font-normal mb-3"
          >Rs.{price/100}</p>
          <p className="font-normal text-xl">⭐ {rating} <span className="text-gray-500">({ratingCountV2})</span></p>
          <p className="text-gray-400 text-[18px] mt-4">
            {description}
          </p>
        </div>
        <div className="w-3/12 relative">
          <img src={PARENTIMAGEURL+imageId} alt="dish_img" className="rounded-2xl"/>
          <button className="block bg-white text-green-700 font-bold text-2xl border px-8 py-1 rounded-xl absolute right-[15%] bottom-[0%] ">ADD</button>
        </div>
      </div>
    </>
  );
};

export const FoodItemsList = ({ foodItems }) => {
  console.log(foodItems, "insideFoodItemsList");
  return (
    <>
      {foodItems.map((item) => {
        return <ItemCards item={item} />;
      })}
    </>
  );
};

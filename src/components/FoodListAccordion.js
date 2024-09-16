import { FoodItemsList } from "./FoodItemsList";

const FoodListAccordion = ({ foodCategories,showListItems,setListItemsIndex, }) => {
  const { title, itemCards } = foodCategories?.card?.card;
  const handleClick=()=>{
    setListItemsIndex()
  }
 
  return (
    <>
      <div className="px-4 py-3 bg-slate-100 mb-4 shadow-lg cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between text-2xl font-bold">
          <h3 className="font-semibold mb-5">
            {title}
            {" - "}({itemCards.length}){" "}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {showListItems && <FoodItemsList foodItems={itemCards}/>}
      </div>
    </>
  );
};

export default FoodListAccordion;

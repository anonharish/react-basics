import React from "react";
import RestuarantCard from "./components/restuarantCard";
import { Shimmer } from "./components/shimmer";

const Body = () => {
  const [restaurantData, setRestuarantData] = React.useState([]);
  const getTopRatedRestaurant = () => {
    let filterdTopRatedRestaurants = restaurantData.filter(
      (restuarant) => restuarant.info.avgRating > 3.9
    );
    setRestuarantData(filterdTopRatedRestaurants);
  };

  React.useEffect(() => {
    let restuarantsData = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4398772&lng=78.36573419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((data) => data.json())
      .then((transformedData) => {
        setRestuarantData(
          transformedData?.data?.cards?.[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        );
      });
  }, []);

  return (
    <div className="body-container">
      <button className="btn-primary" onClick={getTopRatedRestaurant}>
        Top Rated Restauarant
      </button>
      {restaurantData.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurants-container">
          {restaurantData.map((restuarant) => (
            <RestuarantCard restuarant={restuarant.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
